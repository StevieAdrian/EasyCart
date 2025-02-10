import React from "react";
import { IDefaultRouter } from "../../interfaces/IRoute";

const routes: IDefaultRouter[] = [
    {
        path: '/login',
        exact: true,
        name: 'Create Product',
        component: React.lazy(() => import('./Login')),
    }
];

export default routes;