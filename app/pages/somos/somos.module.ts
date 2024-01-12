import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SomosPageRoutingModule } from './somos-routing.module';

import { SomosPage } from './somos.page';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SomosPageRoutingModule,
    NgxExtendedPdfViewerModule,



  ],
  declarations: [SomosPage]
})
export class SomosPageModule {}
