import {User} from "./user";

export interface House {
  id: string,
  name: string,
  address: string,
  bedroom: string,
  bathroom: string,
  description: string,
  price: string
  status: string
  user: User
}
