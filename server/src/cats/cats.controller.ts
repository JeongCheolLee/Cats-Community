import { ReadOnlyCatDto } from './dto/cat.dto';
import { HttpExceptionFilter } from '../common/exceptions/http-exception.filter';
import { CatsService } from './cats.service';
import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { CatRequestDto } from './dto/cats.request.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiOperation({ summary: '현재 고양이 가져오기' })
  @Get()
  getCurrentCat() {
    return 'current cat';
  }

  //validation 을 위한 DTO
  @ApiResponse({
    status: 500,
    description: 'Server Error...',
  })
  @ApiResponse({
    status: 200,
    description: 'success!',
    type: ReadOnlyCatDto,
  })
  @ApiOperation({ summary: '회원가입' })
  @Post()
  async signUp(@Body() body: CatRequestDto) {
    console.log(body);
    return await this.catsService.signUp(body);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  login() {
    return 'login';
  }
  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logOut() {
    return 'logput';
  }

  @ApiOperation({ summary: '고양이 이미지 업로드' })
  @Post('upload/cats')
  uploadCatImg() {
    return 'uploadImg';
  }
}