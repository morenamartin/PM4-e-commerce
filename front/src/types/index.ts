export interface ICategory{
    id: number;
    name: string;
    products?: IProduct[];
}

export interface IOrder {
  id: number;
  status: string;
  date: Date;
  user: IUser;
  products: IProduct[];
}

export interface IProduct {
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number,
    image: string,
    categotyId: number,
}


enum eRole{
    ADMIN = "admin",
    USER = "user"
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: eRole;
    orders: IOrder[];    
}


//DTO

export interface CreateOrderDto {
    userId: number;
    products: number[];
}

export interface LoginUserDto {
    email: string
    password: string
}

export interface RegisterUserDto {
    name: string
    email: string
    password: string
    address: string
    phone: string
}



export interface LoginResponse {
    user: IUser,
    token: string,
    login: boolean
}

export interface LoginServiceResponse {
    message: string,
    data?: LoginResponse,
    errors?:any
}

export interface OrderResponse {
    date: Date,
    id: number,
    products: IProduct[],
    status: "approved" 
}

export interface OrderServiceResponse {
    message?: string,
    errors?: string
    data?: OrderResponse[]
}