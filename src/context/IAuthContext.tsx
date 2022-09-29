export interface IAuthContext {
  token: any;
  signIn: (token: any, callBack: VoidFunction) => void;
  signOut: (callBack: VoidFunction) => void;
}
