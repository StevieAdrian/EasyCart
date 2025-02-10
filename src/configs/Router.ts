import { IDefaultRouter } from "../interfaces/IRoute";
import routerCreateProduct from "../views/CreateProduct/CreateProduct.router";

export const routerContainer: IDefaultRouter[]= [
    ...routerCreateProduct
];