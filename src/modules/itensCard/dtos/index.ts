interface ICreateItensLink {
  link: string;
  card: any;
}

interface IReturnItensLinkCreate {
  id: string;
  link: string;
}

interface IDataUpdate {
  link: string;
  id: string;
}

export { ICreateItensLink, IDataUpdate, IReturnItensLinkCreate };
