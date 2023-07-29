export interface JWTTokens {
  accessToken: JWTAccessToken;
  refreshToken: JWTRefreshToken;
}

export type JWTAccessToken = string;
export type JWTRefreshToken = string;
