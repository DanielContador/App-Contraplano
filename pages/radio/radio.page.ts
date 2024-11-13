import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';
import { ApiwpService } from 'src/app/services/apiwp.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {
radItem:any;
otroVideo:any;
ifrasourc:any = [];
loading:any;
  constructor(public loadingController: LoadingController ,private router: Router ,private api:ApiwpService, private sanitizer:DomSanitizer) {
    this.getUsers();
   }

   async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Cargando contenido...',
      duration: 2000
    });
    await this.loading.present();
  
    
  }

   volve(){
    this.router.navigate(['/home']);
    }
  getUsers(){
    this.presentLoading();
    this.api.getFb().subscribe((data)=>{
      this.radItem=data;
     
      
      this.radItem.content.rendered = this.sanitizer.bypassSecurityTrustHtml(this.radItem.content.rendered);
      
      const doc = new DOMParser().parseFromString(this.radItem.content.rendered, 'text/html');
      const otroVideo = doc.querySelectorAll("iframe");
      this.otroVideo = otroVideo;
      this.otroVideo.forEach((element: {getAttribute: (arg0: string) => any;}) => {
        let youtubeLinks = element.getAttribute('src')
        
        youtubeLinks = this.sanitizer.bypassSecurityTrustResourceUrl(youtubeLinks);
        this.ifrasourc.push(youtubeLinks);
        console.log(this.ifrasourc);


        });
        this.loading.dismiss();

    });
  }

  ngOnInit() {
  }

}
