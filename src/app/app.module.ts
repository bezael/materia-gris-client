import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ChartModule } from './pages/chart/chart.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
const config: SocketIoConfig = { url: 'http://localhost:4500', options: {} };


@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config),
    BrowserModule,
    AppRoutingModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
