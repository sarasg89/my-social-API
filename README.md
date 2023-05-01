# API for a social network web application 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

I have built an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. This application uses Express.js for routing, a MongoDB database, and the Mongoose ODM.

This application is not deployed, but you can see how it works by watching the [video](#usage) below.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Credits](#credits)
- [License](#license)

## Installation

Ensure that you have Node.js installed, v16 is best. You can follow [this](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs) guide for installation instructions.

Clone this repository:

```bash
git clone git@github.com:sarasg89/my-social-API.git
```

Navigate into the directory where you cloned this repository:

```bash
cd ./my-social-API
```

Run npm install to retrieve the dependencies:

```bash
npm install
```

Ensure that you have MongoDB installed. You can follow [this](https://docs.mongodb.com/manual/installation/) guide for installation instructions.

Finally, seed the database to test the routes with sample data:

```bash
npm run seed
```

## Usage

Start the server:

```bash
npm start
```

Use Insomnia Core or Postman to test the routes. You can download Insomnia Core [here](https://insomnia.rest/download) or Postman [here](https://www.postman.com/downloads/).

Watch the video below to see how the routes work:

Test the following routes:

- Users

GET, POST, PUT and DELETE users

```http
http://localhost:3001/api/users
http://localhost:3001/api/users/:userId
```

- Thoughts

GET, POST, PUT and DELETE thoughts

```http
http://localhost:3001/api/thoughts
http://localhost:3001/api/thoughts/:thoughtId
```

- Reactions

POST and DELETE reactions to thoughts

```http
http://localhost:3001/api/thoughts/:thoughtId/reactions/
http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId
```

## Screenshots

![Get all users](./assets/images/get%20all%20users.png)

![Get user by id](./assets/images/get%20users.png)

![Get all thoughts](./assets/images/get%20all%20thoughts.png)

![Get thought by id](./assets/images/get%20thought.png)


## Credits

I used the following tutorials/articles to help me build this application:

[How to validate unique emails with Mongoose](https://masteringjs.io/tutorials/mongoose/mongoose-validate-unique-email)

[How to format dates](https://www.w3schools.com/jsref/jsref_getseconds.asp)

## License

MIT License

Copyright (c) 2023 sarasg89

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.