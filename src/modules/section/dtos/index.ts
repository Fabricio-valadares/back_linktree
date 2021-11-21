interface ICreateSection {
  title: string;
  user: any;
}

interface IReturnSectionCreate {
  id: string;
  title: string;
}

interface IReturnSectionListTotalUser {
  id: string;
  title: string;
  user: any;
}

export { ICreateSection, IReturnSectionCreate, IReturnSectionListTotalUser };
