/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //'secretKey'는 환경변수로 젖아한다 유출되면 안되기에
      secretOrKey: 'secret',
      //서비스에 따라서 expiration 설정이 필요함
      ignoreExpiration: false,
    });
  }

  //async validate(payload) {}
}
