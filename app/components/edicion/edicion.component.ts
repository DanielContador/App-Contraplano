import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HomePage } from 'src/app/pages/home/home.page';
import { ApiwpService } from 'src/app/services/apiwp.service';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.scss'],
})
export class EdicionComponent implements OnInit {
  edicItem:any;
  constructor(private sanitizer: DomSanitizer,private api:ApiwpService,private home: HomePage) { 
    this.getEdic();
  }

  getEdic(){
    this.api.getEdicion().subscribe((data)=>{
      this.edicItem=data;
      console.log(this.edicItem);
      this.edicItem.content.rendered = this.sanitizer.bypassSecurityTrustHtml(this.edicItem.content.rendered);

  
  
    });
  }

  ngOnInit() {}

  volve(){
    this.home.onEdicClick();
    }
   

  

  
}
