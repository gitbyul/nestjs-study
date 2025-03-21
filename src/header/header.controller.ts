import { Controller, Headers, Post, ValidationPipe } from '@nestjs/common';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header.pipe';

@Controller('/header')
export class HeadersController {
  @Post()
  getHeaders(
    @Headers() header,
    @Headers('content-length') contentLength,
    @Headers('accept-encoding') acceptEncoding,
    @Headers('accept') accept,
    @Headers('user-agent') userAgent,
    @Headers('content-type') contentType,
    @Headers('host') host,
    @Headers('connection') connection,
  ) {
    return {
      contentLength,
      acceptEncoding,
      accept,
      userAgent,
      contentType,
      host,
      connection,
    };
  }

  @Post('/false')
  validationHeader(
    @RequestHeader(
      new ValidationPipe({ whitelist: true, validateCustomDecorators: true }),
    )
    header: HeadersDto,
  ) {
    return header;
  }
}
