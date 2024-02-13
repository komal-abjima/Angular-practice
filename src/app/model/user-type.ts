export interface login {
    email: string;
    password: string;
    id: string
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
    id:string;

  }