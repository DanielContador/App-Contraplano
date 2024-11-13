import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentModule } from './components/ComponentModule';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { YTPlayerModule } from 'angular-youtube-player';



@NgModule({
  declarations: [AppComponent],
  imports: [ComponentModule, BrowserModule,CommonModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, BrowserAnimationsModule, NgxExtendedPdfViewerModule, YTPlayerModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },],
  bootstrap: [AppComponent],
})
export class AppModule {}
