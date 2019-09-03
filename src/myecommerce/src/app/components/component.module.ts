import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Componentes
import { MainComponent } from './pages/main/main.component';
import { ComponentsComponent } from './components.component';
import { COMPONENTS_ROUTES } from './component.routes';


@NgModule({
    declarations: [
       MainComponent,
       ComponentsComponent
    ],
    exports: [
        MainComponent
    ],
    imports: [
        FormsModule,
        COMPONENTS_ROUTES
    ]
})

export class ComponentsModule {}