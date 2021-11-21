interface ICreateUser {
  name: string;
  email: string;
  urlPiece: string;
  password: string;
}

interface IListDataSection {
  id: string;
  title: string;
}

interface IReturnUserCreate {
  id: string;
  name: string;
  email: string;
  urlPiece: string;
  section: IListDataSection[];
}

export { ICreateUser, IReturnUserCreate };
