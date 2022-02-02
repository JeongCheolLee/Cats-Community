/* eslint-disable prettier/prettier */
import { CatsRepository } from './../../src/cats/cats.repository';
import { Payload } from './jwt.payload';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly catsRepository: CatsRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //'secretKey'는 환경변수로 젖아한다 유출되면 안되기에
      secretOrKey: 'secret',
      //서비스에 따라서 expiration 설정이 필요함
      ignoreExpiration: false,
    });
  }

  async validate(payload: Payload) {
    const cat = await this.catsRepository.findCatByIdWithoutPassword(
      payload.sub,
    );

    if (cat) {
      return cat; //request.user 속에 cat이 들어가고 있음
    } else {
      throw new UnauthorizedException('접근 오류');
    }
  }
}
