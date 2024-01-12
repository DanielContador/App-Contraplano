import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HomePage } from 'src/app/pages/home/home.page';
import { ApiwpService } from 'src/app/services/apiwp.service';
import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
textspeech:any;
  newsItem:any;
  id:any;
  texto:any;
  constructor(private sanitizer:DomSanitizer ,private home: HomePage ,private api:ApiwpService ,private router:Router ,private http: HttpClient) {
    this.id = localStorage.getItem('id');
    this.getUsers();
   }

  ngOnInit() {}
  getUsers(){
    this.api.getUsers(this.id).subscribe((data)=>{

      this.newsItem=data;
      this.newsItem.content.rendered = this.sanitizer.bypassSecurityTrustHtml(this.newsItem.content.rendered);
      
      const doc = new DOMParser().parseFromString(this.newsItem.content.rendered, 'text/html');
      const texto = doc.querySelector('script');
      this.texto = texto;
      const startIndex = this.texto.textContent.indexOf('responsiveVoice.speak("') + 'responsiveVoice.speak("'.length;
      const endIndex = this.texto.textContent.indexOf('", "Spanish Latin American Male");');

      const text = this.texto.textContent.substring(startIndex, endIndex);
      this.texto=text.replace(" (más&hellip;)", "").toString();

      console.log(this.texto);

      
      // this.textspeech=this.newsItem.content.rendered;
      this.textspeech=this.texto;
      


    });
  }

  volve(){
  this.home.onButtonClick(0);
  }

  // cspeak(){
  //     TextToSpeech.speak({
  //     text: this.textspeech,
  //     lang: 'es-MX',
  //     rate: 1.2,
  //     pitch: 1.0,
  //     volume: 1.0,
  //     category: 'ambient',
  //   });
  // };

  // cspeak() {
  //   const parts = this.textspeech.split('. ');
  //   for (const part of parts) {
  //     TextToSpeech.speak({
  //       text: part,
  //       lang: 'es-MX',
  //       rate: 1.2,
  //       pitch: 1.0,
  //       volume: 1.0,
  //       category: 'ambient',
  //     });
  //   }
  // };
  

  speakChunk(text: string) {
    if (text.length === 0) {
      return;
    }
    
    const chunkSize = 200;
    let chunk = text.substr(0, chunkSize);
    text = text.substr(chunkSize);
    
    TextToSpeech.speak({
      text: chunk,
      lang: 'es-MX',
      rate: 1.2,
      pitch: 1.0,
      volume: 1.0,
      category: 'ambient',
    }).then(() => {
      setTimeout(() => {
        this.speakChunk(text);
      }, 50);
    });
  }
  
  cspeak() {
    this.speakChunk(this.textspeech);
  }
  
  stop(){
    TextToSpeech.stop();
  };

}

