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
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  id?: number | undefined;
  quantity?: number | undefined;
  productId: number;
  userId: number;
}