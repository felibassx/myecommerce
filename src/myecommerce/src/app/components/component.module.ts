import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Componentes
import { MainComponent } from './pages/main/main.component';
import { ComponentsComponent } from './components.component';
import { COMPONENTS_ROUTES } from './component.routes';
import { CommonModule } from '@angular/common';


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
        CommonModule,
        COMPONENTS_ROUTES
    ]
})

export class ComponentsModule {}