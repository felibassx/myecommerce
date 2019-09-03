import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';




const componentsRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: 'main', component: MainComponent, data: { titulo: 'Página Principal' } }
        ]
    }
];

// se usa el forchild cuando es una router dentro de otro router
export const COMPONENTS_ROUTES = RouterModule.forChild( componentsRoutes );