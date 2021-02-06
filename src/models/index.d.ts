import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class User {
  readonly id: string;
  readonly userName: string;
  readonly name: string;
  readonly password: string;
  readonly Applications?: (Application | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Application {
  readonly id: string;
  readonly jobTitle: string;
  readonly company: string;
  readonly applicationDate: string;
  readonly companyResponse?: boolean;
  readonly userID: string;
  constructor(init: ModelInit<Application>);
  static copyOf(source: Application, mutator: (draft: MutableModel<Application>) => MutableModel<Application> | void): Application;
}