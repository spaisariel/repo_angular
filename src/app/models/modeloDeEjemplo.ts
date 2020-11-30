
export interface Modelo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface EntidadAcreedora{
  nombre: string;
  descripcion: string;
  deudas:Deuda[];
}

export interface Deuda{
  descripcion:string;
  monto:string;
  origen:string;
  nroProducto:string;
  situacion:string;
}
export interface Plan{
  cuotas:string;
  monto: string;
  eleccion:boolean;
}