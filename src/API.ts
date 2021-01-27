/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  userName: string,
  name: string,
  password: string,
  applications: Array< string | null >,
};

export type ModelUserConditionInput = {
  userName?: ModelStringInput | null,
  name?: ModelStringInput | null,
  password?: ModelStringInput | null,
  applications?: ModelIDInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateUserInput = {
  id: string,
  userName?: string | null,
  name?: string | null,
  password?: string | null,
  applications?: Array< string | null > | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateApplicationInput = {
  id?: string | null,
  jobTitle: string,
  company: string,
  applicationDate: string,
  companyResponse?: boolean | null,
};

export type ModelApplicationConditionInput = {
  jobTitle?: ModelStringInput | null,
  company?: ModelStringInput | null,
  applicationDate?: ModelStringInput | null,
  companyResponse?: ModelBooleanInput | null,
  and?: Array< ModelApplicationConditionInput | null > | null,
  or?: Array< ModelApplicationConditionInput | null > | null,
  not?: ModelApplicationConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateApplicationInput = {
  id: string,
  jobTitle?: string | null,
  company?: string | null,
  applicationDate?: string | null,
  companyResponse?: boolean | null,
};

export type DeleteApplicationInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  userName?: ModelStringInput | null,
  name?: ModelStringInput | null,
  password?: ModelStringInput | null,
  applications?: ModelIDInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelApplicationFilterInput = {
  id?: ModelIDInput | null,
  jobTitle?: ModelStringInput | null,
  company?: ModelStringInput | null,
  applicationDate?: ModelStringInput | null,
  companyResponse?: ModelBooleanInput | null,
  and?: Array< ModelApplicationFilterInput | null > | null,
  or?: Array< ModelApplicationFilterInput | null > | null,
  not?: ModelApplicationFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    userName: string,
    name: string,
    password: string,
    applications: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    userName: string,
    name: string,
    password: string,
    applications: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    userName: string,
    name: string,
    password: string,
    applications: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateApplicationMutationVariables = {
  input: CreateApplicationInput,
  condition?: ModelApplicationConditionInput | null,
};

export type CreateApplicationMutation = {
  createApplication:  {
    __typename: "Application",
    id: string,
    jobTitle: string,
    company: string,
    applicationDate: string,
    companyResponse: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateApplicationMutationVariables = {
  input: UpdateApplicationInput,
  condition?: ModelApplicationConditionInput | null,
};

export type UpdateApplicationMutation = {
  updateApplication:  {
    __typename: "Application",
    id: string,
    jobTitle: string,
    company: string,
    applicationDate: string,
    companyResponse: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteApplicationMutationVariables = {
  input: DeleteApplicationInput,
  condition?: ModelApplicationConditionInput | null,
};

export type DeleteApplicationMutation = {
  deleteApplication:  {
    __typename: "Application",
    id: string,
    jobTitle: string,
    company: string,
    applicationDate: string,
    companyResponse: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    userName: string,
    name: string,
    password: string,
    applications: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      userName: string,
      name: string,
      password: string,
      applications: Array< string | null >,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetApplicationQueryVariables = {
  id: string,
};

export type GetApplicationQuery = {
  getApplication:  {
    __typename: "Application",
    id: string,
    jobTitle: string,
    company: string,
    applicationDate: string,
    companyResponse: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListApplicationsQueryVariables = {
  filter?: ModelApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListApplicationsQuery = {
  listApplications:  {
    __typename: "ModelApplicationConnection",
    items:  Array< {
      __typename: "Application",
      id: string,
      jobTitle: string,
      company: string,
      applicationDate: string,
      companyResponse: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    userName: string,
    name: string,
    password: string,
    applications: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    userName: string,
    name: string,
    password: string,
    applications: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    userName: string,
    name: string,
    password: string,
    applications: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateApplicationSubscription = {
  onCreateApplication:  {
    __typename: "Application",
    id: string,
    jobTitle: string,
    company: string,
    applicationDate: string,
    companyResponse: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateApplicationSubscription = {
  onUpdateApplication:  {
    __typename: "Application",
    id: string,
    jobTitle: string,
    company: string,
    applicationDate: string,
    companyResponse: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteApplicationSubscription = {
  onDeleteApplication:  {
    __typename: "Application",
    id: string,
    jobTitle: string,
    company: string,
    applicationDate: string,
    companyResponse: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
