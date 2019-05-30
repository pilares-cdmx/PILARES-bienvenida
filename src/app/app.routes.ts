import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

/* Layouts */
import { FrontEndComponent } from './layout/front-end/front-end.component';

/* Frontend */
import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';
// import { RegistroComponent } from './components/registro/registro.component';
// import { AsignaPilaresComponent } from './components/asigna-pilares/asigna-pilares.component';
// import { EdicionComponent } from './components/edicion/edicion.component';
// import { AsignaActividadesComponent } from './components/asigna-actividades/asigna-actividades.component';
// import { ReportesComponent } from './components/reportes/reportes.component';
// import { GraficasComponent } from './components/graficas/graficas.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: FrontEndComponent,
    children: [
      {path: '', component: BienvenidosComponent, pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
