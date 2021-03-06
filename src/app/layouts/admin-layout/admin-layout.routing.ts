import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {ProductComponent} from "../../pages/product/container/product/product.component";
import { DepartamentoComponent } from 'src/app/pages/departamento/container/departamento/departamento.component';
import {NivelComponent} from '../../pages/nivel/container/nivel/nivel.component';
import { GradoComponent} from '../../pages/grado/container/grado/grado.component';
import {SeccionComponent} from '../../pages/seccion/container/seccion/seccion.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'products',       component: ProductComponent },
    { path: 'departamentos',  component: DepartamentoComponent },
    { path: 'niveles',         component:NivelComponent },
    { path: 'grados',          component:GradoComponent },
    { path: 'secciones',          component:SeccionComponent }
    
];
