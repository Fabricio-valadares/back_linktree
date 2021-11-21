interface ICreateCard {
  title: string;
  section: any;
}

interface IReturnCardCreate {
  id: string;
  title: string;
}

export { ICreateCard, IReturnCardCreate };
