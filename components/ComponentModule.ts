
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { EdicionComponent } from "./edicion/edicion.component";

import { NoticiaComponent } from "./noticia/noticia.component";

@NgModule({
    imports: [CommonModule,IonicModule],
    exports: [NoticiaComponent, EdicionComponent],
    declarations: [NoticiaComponent, EdicionComponent],
    providers: [],
 })
 
 export class ComponentModule {
 }