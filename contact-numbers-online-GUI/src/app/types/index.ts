
export type Contact = {
  _id:any,
  Name:string,
  Phone:string,
  Address:string,
  Notes:string,
  isEditing:boolean
};
export type User = {
  username:string,
  password: string
};
export type verifiedUser = {
  username: string;
  token: string;
};