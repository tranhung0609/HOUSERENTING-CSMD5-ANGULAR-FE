import firebase from "firebase/compat";
import User = firebase.User;
import {House} from "./house";

export interface Order {
  id?: string,

  house?: House,

  customer?: User,

  startTime?: string

  endTime?: string,

  total?: string,

  status?: string

}
