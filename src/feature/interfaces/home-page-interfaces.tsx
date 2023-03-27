export interface IPeople {
    id: string;
    name : string;
    age: number
  }
  export interface IPersonResponse{
    births : IBirth[]
  }
  export interface IBirth {
    text: string;
    year: number;
  }