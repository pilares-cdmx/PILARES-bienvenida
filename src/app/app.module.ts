import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { FrontEndComponent } from './layout/front-end/front-end.component';
import { FooterComponent } from './layout/shared/footer/footer.component';
import { HeaderComponent } from './layout/shared/header/header.component';
import { SidebarComponent } from './layout/shared/sidebar/sidebar.component';
import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontEndComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    BienvenidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
