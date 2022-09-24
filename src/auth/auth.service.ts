import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return 'I have signed in';
  }
  signin() {
    return 'I have signup';
  }
}
