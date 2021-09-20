# FullStack - Backend "Number-to-Word" Phoneword 📱

Number-to-words generator, developed in fullstack Javascript. This is the backend side.

## Description 📖

This is a phone numbers to [phonewords](https://en.wikipedia.org/wiki/Phoneword) converter application. You can use the provided keypad to digit the numbers and once ready press the "Generate Phone Words" button to get a list of phone words.

The backend provides endpoint to receive (digits) and send (words) to consume, and a few tests to give an API example, valid number result length and words.

## API Reference 🥼

#### GET example

The server is running at `localhost:9000`. You can change it anytime by going to `server.js` and change the variable `const PORT`.

```http
  GET /api/v1/

  "phonewords example": "/api/v1/phonewords/345"

```

#### POST numbers

```http
  POST /api/v1/phonewords/${number}
```

| Parameter | Type      | Description                                 |
| :-------- | :-------- | :------------------------------------------ |
| `number`  | `integer` | **Required**. Numbers to convert into words |

## Screenshots 🧪

It's possible to test the APIs endpoint with Postman to see the return values. Here's an example. 👇🏼
![App Screenshots](https://i.ibb.co/tPSpQ9q/works.png)
The example below shows what happens if an invalid digit or a character is inserted. 👇🏼
![App Screenshots](https://i.ibb.co/yBJ2p4z/wont.png)
The example below gives an example on how to consume the API. 👇🏼
![App Screenshots](https://i.ibb.co/7N4wCBH/sample.png)

## Run Locally and Dependencies 🛠

Clone the project

```bash
  git clone https://github.com/Amrod92/server_number-to-word.git
```

Go to the project directory

```bash
  cd server_number-to-word
```

Install dependencies

```bash
  npm install
```

Start the software and enjoy!

```bash
  npm start
```

Test the number result length/words and example

```bash
  npm test
```

## Tech Stack 👓

**Beckend:** Node.JS v15.9, Express
**Testing:** Mocha, Chai, Chai-HTTP

## License ⚖

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
