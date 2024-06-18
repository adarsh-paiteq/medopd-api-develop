import { GenerateTokens } from '@clinics/dto/verify-clinic-otp.dto';
import { ArgsType, ObjectType } from '@nestjs/graphql';
import { IsJWT, IsNotEmpty } from 'class-validator';

@ArgsType()
export class AdminRefreshTokenArgs {
  @IsJWT()
  @IsNotEmpty()
  token: string;
}

@ObjectType()
export class AdminRefreshTokenResponse extends GenerateTokens {}
