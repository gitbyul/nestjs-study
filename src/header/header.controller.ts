import { Controller, Headers, Post } from '@nestjs/common';

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
}
