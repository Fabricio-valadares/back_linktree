interface ICreateItensLink {
  link: string;
  title: string;
  card: any;
}

interface IReturnItensLinkCreate {
  id: string;
  link: string;
  title: string;
}

interface IDataUpdate {
  link: string;
  id: string;
  title: string;
}

export { ICreateItensLink, IDataUpdate, IReturnItensLinkCreate };
