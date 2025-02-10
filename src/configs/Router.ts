import { IDefaultRouter } from "../interfaces/IRoute";
import routerCreateProduct from "../views/CreateProduct/CreateProduct.router";
import routerLogin from "../views/Login/Login.router";

export const routerContainer: IDefaultRouter[]= [
    ...routerCreateProduct,
    ...routerLogin
];