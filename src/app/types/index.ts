export type UserSession = {
  user: {
    nickname: string;
    name: string;
    picture: string;
    updated_at: string;
    email: string;
    email_verified: boolean;
    sub: string;
    sid: string;
  };
  accessToken: string;
  accessTokenScope: string;
  accessTokenExpiresAt: number;
  idToken: string;
  token_type: string;
};

export type ReturnStatement = {
  success: boolean;
  error: boolean;
  message: string;
  data: any;
};
