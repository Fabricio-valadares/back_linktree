interface ICreateUser {
  name: string;
  email: string;
  urlPiece: string;
  password: string;
}

interface IReturnUserCreate {
  id: string;
  name: string;
  email: string;
  urlPiece: string;
}

export { ICreateUser, IReturnUserCreate };
