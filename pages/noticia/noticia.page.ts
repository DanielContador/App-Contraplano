import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiwpService } from 'src/app/services/apiwp.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {
newsItem:any;
id:any;
constructor(private api:ApiwpService ,private router:Router ,private http: HttpClient) { 
  this.id = localStorage.getItem('id');
  this.getUsers();
  }
  ionViewWillEnter(){
    
    
    

    
  }
  getUsers(){
    this.api.getUsers(this.id).subscribe((data)=>{
      this.newsItem=data;
      console.log(this.newsItem)

    });
  }
  ngOnInit() {

}


volver(){
  this.router.navigate(['/home']);
}
}
