export type TUserToken = {
  sub: string;
  id: string;
  token: {
    expiresIn: string;
    token: string;
  };
  data: TUserData;
  status: string;
  message: string;
  providerAccountId: string;
  type: string;
  provider: string;
  iat: number;
  exp: number;
  jti: string;
};

export type TUserData = {
  id: string;
  nik: string;
  email: string;
  name: string;
  phoneNumber: string;
  role: string;
  photo: string | null;
  address: string | null;
  positionId: string;
  branchId: string;
  createdAt: string;
  updatedAt: string;
  token: string;
};
