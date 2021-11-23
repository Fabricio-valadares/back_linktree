interface ICreateCard {
  title: string;
  section: any;
}

interface IReturnCardCreate {
  id: string;
  title: string;
}

interface IDataUpdate {
  title: string;
  id: string;
}

export { ICreateCard, IReturnCardCreate, IDataUpdate };
