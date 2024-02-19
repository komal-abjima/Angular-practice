export interface login {
    username: string;
    password: string;
    id: number
  }

  export interface signUp {
    email: string;
    password: string;
    username: string;
    phone: string;
    name: {
      firstname: string;
      lastname: string;
    }
    address: {
      city: string;
      street: number;
      number: number;
      zipcode: string;
      geolocation: {
        lat: string;
        long: string;
      }
    }
    id:number;

  }

  export interface cart {
    id: number;
    userId: number;
    date: string;
    products: cartProduct[];
    __v: number;
    price?: 1500;
  }
   
  export interface cartProduct {
    productId: number;
    quantity: number;
  }

  export interface priceSummary{
    price:number,
    discount:number,
    tax:number,
    delivery:number,
    total:number
  }

  export interface order {
    email:string,
    address:string,
    contact:string,
    totalPrice:number,
    userId:string,
    id:number|undefined
  }