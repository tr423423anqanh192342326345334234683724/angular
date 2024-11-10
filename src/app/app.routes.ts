import { Routes } from '@angular/router';
import { LoginComponent } from './webquanganh/user/login/login.component';
import { LayoutComponent } from './webquanganh/user/layout/layout.component';
import { ProductsComponent } from './webquanganh/user/products/products.component';
import { LienheComponent } from './webquanganh/user/lienhe/lienhe.component';
import { MarsaComponent } from './webquanganh/user/marsa/marsa.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path:'',
        component: LayoutComponent,
        children: [
            {
                path: 'products',
                component: ProductsComponent
            },
            {
                path: 'lienhe',
                component: LienheComponent
            },
            {
                path: 'marsa',
                component: MarsaComponent
            }

        ]
    }
        

];
