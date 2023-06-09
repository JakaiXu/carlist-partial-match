import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeName, changeCost } from "./slices/formSlice";
import {
  carsReducer,
  changeSearchTerm,
  addCar,
  removeCar,
} from "./slices/carsSlice";

const store = configureStore({
  reducer: { form: formReducer, cars: carsReducer },
});
console.log(store.getState());
export { store, changeCost, changeName, changeSearchTerm, addCar, removeCar };
