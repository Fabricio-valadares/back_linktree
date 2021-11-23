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

interface IDataUpdate {
  title: string;
  id: string;
}

export {
  ICreateSection,
  IDataUpdate,
  IReturnSectionCreate,
  IReturnSectionListTotalUser,
};
