import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AnyARecord } from 'dns';

import { ApiwpService } from 'src/app/services/apiwp.service';
import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VideosPage implements OnInit {
youtubeLinks:any = [];
vidItem:any;
divElements: any;
imgElements: any;
sectionElements: any;
youItem:any;
otroVideo:any;
ifrasourc:any = [];
loading: any;
  constructor(public loadingController: LoadingController ,private router: Router ,private http:HttpClient ,public sanitizer:DomSanitizer ,private api:ApiwpService) { 
    // this.getYour();
    this.getUsers();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Cargando videos...',
      duration: 2000
    });
    await this.loading.present();
  
    
  }
  // getUsers(){
  //   this.api.getVideos().subscribe((data)=>{
  //     this.vidItem=data;
      
  //     this.vidItem.content.rendered = this.sanitizer.bypassSecurityTrustHtml(this.vidItem.content.rendered);
  //     const doc = new DOMParser().parseFromString(this.vidItem.content.rendered, 'text/html');
  //     const divElements = doc.querySelectorAll('.premium-blog-post-container');

      
  //     this.divElements = divElements;
  //       console.log(this.divElements);
      
  //   });
  // ;}
//   getYour(){
//     this.api.getYou().subscribe((data) => {
//       this.youItem = data;
//       this.youItem.html = this.sanitizer.bypassSecurityTrustHtml(this.youItem.html);
//       console.log(this.youItem);
//   });
// }

volve(){
  this.router.navigate(['/home']);
  }
  getUsers() {
    this.presentLoading();
    this.api.getVideos().subscribe((data) => {
      this.vidItem = data;
      this.vidItem.content.rendered = this.sanitizer.bypassSecurityTrustHtml(this.vidItem.content.rendered);
      
      const doc = new DOMParser().parseFromString(this.vidItem.content.rendered, 'text/html');
      const otroVideo = doc.querySelectorAll('[data-elementor-lightbox-video]');
      this.otroVideo = otroVideo;
      console.log(this.otroVideo)
      this.otroVideo.forEach((element: {getAttribute: (arg0: string) => any;}) => {
        let youtubeLinks = element.getAttribute('data-elementor-lightbox-video')
        
        youtubeLinks = this.sanitizer.bypassSecurityTrustResourceUrl(youtubeLinks);
        this.ifrasourc.push(youtubeLinks);
        console.log(this.ifrasourc);


        });
    
      const divElements = doc.querySelectorAll('.popup-video');
      this.divElements = divElements;
      this.divElements.forEach((element: { getAttribute: (arg0: string) => any; }) => {
        let youtubeLink = element.getAttribute('href')
        this.api.getYou(youtubeLink).subscribe((data) => {
            this.youItem = data;
            this.youItem.html = this.sanitizer.bypassSecurityTrustHtml(this.youItem.html);
            this.youtubeLinks.push(this.youItem);
            
        });
      });
      
      console.log(this.divElements);
      // find all img elements within divElements and apply CSS styles
      const imgElements = doc.querySelectorAll('img');
      imgElements.forEach(img => {
        img.style.width = '100%';
        img.style.height = 'auto';
        img.style.objectFit = 'cover';
      });
      this.imgElements= imgElements;
      this.loading.dismiss();

    
      
      
    });
  }


  
  

  // getUsers() {
  //   this.api.getVideos().subscribe((data) => {
  //     this.vidItem = data;
  //     this.vidItem.content.rendered = this.sanitizer.bypassSecurityTrustHtml(this.vidItem.content.rendered);
      
  //     const doc = new DOMParser().parseFromString(this.vidItem.content.rendered, 'text/html');
  //     const divElements = doc.querySelectorAll('.popup-video');
  //     this.divElements = divElements;
  //     console.log(this.divElements);

  //     // find all img elements within divElements and apply CSS styles
  //     const imgElements = doc.querySelectorAll('img');
  //     imgElements.forEach(img => {
  //       img.style.width = '100%';
  //       img.style.height = 'auto';
  //       img.style.objectFit = 'cover';
  //     });
  //     this.imgElements= imgElements;

  //     this.divElements.forEach((element: { getAttribute: (arg0: string) => any; }) => {
  //       let link = element.getAttribute("href");
  //       let videoId = link.split("=")[1];
  //       this.player = new YT.Player('player', {
  //         height: '360',
  //         width: '640',
  //         videoId: videoId,
  //         playerVars: {
  //           'key': 'AIzaSyBkHC0jDfjW1IetG-RPiJtSjAm4y5RGWlg',
  //           'autoplay': 1,
  //           'enablejsapi': 1,
  //           'origin': window.location.origin,
  //           'modestbranding': 1,
  //           'rel': 0,
  //           'showinfo': 0,
  //           'iv_load_policy': 3
  //         },
  //         events: {
  //           'onReady': this.onPlayerReady,
  //           'onStateChange': this.onPlayerStateChange
  //         }
  //       });
  //     });
  //   });
  // }

  // onPlayerReady(event: { target: { playVideo: () => void; }; }) {
  //   event.target.playVideo();
  // }

  // onPlayerStateChange(event: any) {
  //   // handle player state changes
  // }


  ngOnInit() {
  }

}
