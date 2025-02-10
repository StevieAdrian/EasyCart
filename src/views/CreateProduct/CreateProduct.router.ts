import React from "react";
import { IDefaultRouter } from "../../interfaces/IRoute";

const routes: IDefaultRouter[] = [
    {
        path: '/product/create-product',
        exact: true,
        name: 'Create Product',
        component: React.lazy(() => import('./CreateProduct')),
    }
];

export default routes;