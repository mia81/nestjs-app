import { AuthDto } from './dto/auth.dto';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('register')
  async register(@Body() data:  AuthDto) {

  }


  @HttpCode(200)
  @Post('login')
  async login(@Body() data: AuthDto) {
  }


}
