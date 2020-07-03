import dns from 'dns'
import log from "./log";
import errorCodes from './errorCodes'
import {SMTPClient} from 'smtp-client';

function getMx(domain: string): Promise<string>{
    return new Promise((resolve, reject) => {
        dns.resolveMx(domain, function(err, addresses){
            if(err){
                reject(err)
            }else if(addresses === undefined){
                reject(err)
            }else{
                resolve(addresses[0].exchange)
            }
        })
    })
}

export async function verify(email: string){
    let mx;
    let start = 0;
    try{
        const domain = email.split('@')[1];

        mx = await getMx(domain);
        log.info("First mx: " + mx)
        start = new Date().getTime();

        let smtp = new SMTPClient({
            host: mx,
            port: 25
        });
        await smtp.connect();
        await smtp.greet({ hostname: process.env.DOMAIN || 'verify.mxis.ch' })
        await smtp.mail({from: 'no-reply@' + process.env.DOMAIN || 'no-reply@mxis.ch'})
        const code = await smtp.rcpt({to: email })
        await smtp.quit();

        const resTime = new Date().getTime() - start
        const response = {
            valid: true,
            mx: mx,
            time: resTime,
            code: parseInt(code)
        }
        log.success("response code: " + code + " in " + resTime + " ms")
        return response
    }catch(err){
        log.warn(JSON.stringify(err))
        if(err.code == 'ENOTFOUND'){
            log.warn("no mx record found")
            return {
                valid: false,
                mx: null,
                time: null,
                code: null,
                message: "no mx record found"
            }
        }else if(err.code == 'ECONNREFUSED'){
            log.warn("server refused connection")
            return {
                valid: false,
                mx: err.address,
                time: null,
                code: null,
                message: "server refused connection"
            }
        }else if(errorCodes.includes(parseInt(err.code))){
            log.warn("server returned error: " + err.code)
            return {
                valid: false,
                mx: mx,
                time: new Date().getTime() - start,
                code: parseInt(err.code),
                enhancedCode: err.enhancedCode,
                message: err.message
            }
        }else{
            log.warn(JSON.stringify(err))
            log.fatal(err);
            throw(err)
        }
    }
}



