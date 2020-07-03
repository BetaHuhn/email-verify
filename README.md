# email-verify
[![Build Status](https://travis-ci.org/BetaHuhn/email-verify.svg?branch=master)](https://travis-ci.org/BetaHuhn/email-verify) [![Coverage Status](https://coveralls.io/repos/github/BetaHuhn/email-verify/badge.svg?branch=master)](https://coveralls.io/github/BetaHuhn/email-verify?branch=master)

Quickly verify email addresses

## Live Website

The live version of this project can be found here: [verify.mxis.ch](https://verify.mxis.ch)

## Introduction

This repo contains the source code for a simple email verifier. The frontend is built with Vue.js and the backend uses Node.js. Email addresses are verified by checking the format and opening a SMTP connection with the receivers email server. It goes through all steps to send a real email, but stops just before an actual email is sent.

## Installation

Download the repo:

```
git clone https://github.com/BetaHuhn/email-verify
```

Change directory:

```
cd email-verify
```

Create .env file:

```
nano .env
```

Add:

```
ORIGIN=Cors Origin, split with ","; defaults to '*'
HOSTNAME=Hostname which will be sent during SMTP session; defaults to verify.mxis.ch
FROM_ADDRESS=From Address which will be used during validation (no emails will be sent there); defaults to no-reply@verify.mxis.ch
PORT=Port the server runs on; defaults to 3000
```

Install server dependencies:

```
npm i --save
```

Go into client directory and install vue.js frontend dependencies:

```
cd client
npm i --save
```

Build frontend:

```
npm run build
```

Go back to server directory and start app

```
cd ..
npm run start
```

## Authors
* **Maximilian Schiller** ([@BetaHuhn](https://github.com/BetaHuhn))

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
