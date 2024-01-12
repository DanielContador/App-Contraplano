import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
@Component({
  selector: 'app-somos',
  templateUrl: './somos.page.html',
  styleUrls: ['./somos.page.scss'],
})
export class SomosPage implements OnInit {
link:any;
textspeech:any;
  constructor(private http:HttpClient, private dom: DomSanitizer) {
    // this.link='https://contraplano.cl/somos/?elementor-preview=20982&ver=1675182813#edicion-septiembre-2022-3/1/';
    // this.link = this.dom.bypassSecurityTrustResourceUrl(this.link);
    
    this.textspeech="Contraplano: Un día 9 de agosto se funda en Reñaca. Cumple más de dos décadas como medio de comunicación, otrora escrito y hoy digital, en un mundo globalizado altamente tecnológico, es ya un merito importante. Contraplano, fundado un 9 de agosto de 2002, en Reñaca, surgió como necesidad imperiosa para favorecer la noticia local, objetivo que cumple hasta ahora a plena calidad y ahora plenamente incorporado a las nuevas plataformas comunicacionales. La línea editorial permite concentrar variedad de opiniones, pero principalmente se consolida como medio comprometido con un periodismo veraz, a la vez de otorgar cabida a conocidos columnistas para expresar libremente sus puntos de vista sobre temas de la contingencia compartiendo espacios con informaciones, crónicas, reportajes, entrevistas y publirreportajes de la contingencia noticiosa. A más de dos décadas de su salida a la luz pública, Contraplano ha evolucionado en su trayectoria como medio de comunicación al incorporar nuevas instancias de cobertura y ampliando su presencia periodística en Viña del Mar, Concón, Quintero, Puchuncaví, además de incorporar noveles sistemas televisivos, streaming y radiales dentro de los ámbitos locales. El reconocimiento a su trayectoria ha sido expresado por diversos estamentos de la comunidad, autoridades y organizaciones sociales, de tal forma que este proyecto marca un hito altamente positivo e importante, que permite a Contraplano aspirar en el futuro a mayores proyecciones comunicacionales. Fundado para servir a la ciudadanía a través de la información, propende también al desarrollo de la zona, sin prejuicio de expresar editorialmente su opinión critica, positiva y altruista fundamentada ante hechos que la ameriten. La dirección de este medio agradece a la comunidad, avisadores, clientes y autoridades que han manifestado congratulaciones y parabienes, que reconfortan a este medio informativo a continuar en la senda comunicacional que se ha impuesto a través de sus distintas modalidades."
   }
   cspeak(){
    TextToSpeech.speak({
    text: this.textspeech,
    lang: 'es-MX',
    rate: 1.2,
    pitch: 1.0,
    volume: 1.0,
    category: 'ambient',
  });
  console.log(this.textspeech);
};
stop(){
  TextToSpeech.stop();
};
  ngOnInit() {

  }
}
