import { Injectable } from '@nestjs/common';
const jwt = require('jsonwebtoken');


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async login() {
    try {
      // Generate a token with 1 hour expiry and return in response which will be used to access the other apis
      let token = jwt.sign({}, process.env.MY_KEY, { expiresIn: '1h' });
      return { token: token, message: "Token generated successfully" }
    }
    catch (err) {
      return { error: err }
    }
  }
}
