import { IsInt, IsPositive, IsString, Length } from 'class-validator';

export class CreatePropertyDto {
  @IsString({ always: true })
  @Length(2, 10, { message: 'error on length' })
  name: string;

  @IsString()
  @Length(2, 10, { groups: ['create'] })
  @Length(1, 15, { groups: ['update'] })
  description: string;

  @IsInt({ always: true }) // groups 사용 할 경우 모든 그룹에 허용 해야 하는 경우 다음과 같이 always true 적용 필요
  @IsPositive() // 자연수만
  area: number;
}
