import { Request, Response } from "express";
import log from "../utils/log";

/**
 * Sends a response back to the client
 * @param res response - handled by express automatically
 * @param result Result (content) that should be send to the client
 * @param status Status (in json) that should be send to the client
 */
export function sendResult(res: Response, result: any, status: number) {
  res.json({
    status: status,
    result,
  });
}

/**
 * Logs incoming requests
 */
export function routeLog(){
	return (req:Request, res:Response, next:Function) => {
		const date_ob = new Date();
		const date = ('0' + date_ob.getDate()).slice(-2);
		const month = ('0' + (date_ob.getMonth() + 1)).slice(-2);
		const year = date_ob.getFullYear();
		const hours = date_ob.getHours();
		const minutes = date_ob.getMinutes();
		const seconds = date_ob.getSeconds();
		const time = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds;
		log.request(`${time} ${req.method} ${req.originalUrl}`)
		next()
	};
}
