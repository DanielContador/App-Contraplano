import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiwpService {
apiURL = 'https://contraplano.cl/wp-json/wp/v2/posts/$'
  constructor(private http:HttpClient) { }


  getbyid(id:any){
    return this.http.get<any>(`https://contraplano.cl/wp-json/wp/v2/posts/${id}`).subscribe(newsItem => {

  });}

  getUsers(id:any):Observable<any>{
    return this.http.get('https://contraplano.cl/wp-json/wp/v2/posts/'+id).pipe(
      retry(3)
    );
}
  getNews():Observable<any>{
    return this.http.get('https://contraplano.cl/wp-json/wp/v2/posts?per_page=100').pipe(
      retry(3)
    );
  }

  getCategory():Observable<any>{
    return this.http.get('https://contraplano.cl/wp-json/wp/v2/categories').pipe(
      retry(3)
    );
  }
  

  getEdicion():Observable<any>{
    return this.http.get('https://contraplano.cl/wp-json/wp/v2/posts/28701').pipe(
      retry(3)
    );
  }


  getVideos():Observable<any>{
    return this.http.get('https://contraplano.cl/wp-json/wp/v2/pages/8910').pipe(
      retry(3)
    );
  }


  getYou(videoId:any):Observable<any>{
    return this.http.get(`https://www.youtube.com/oembed?url=${videoId}`).pipe(
      retry(3)
    );
  }
  
  getFb():Observable<any>{
    return this.http.get('https://radiocontraplano.cl/wp-json/wp/v2/pages/989').pipe(
      retry(3)
    );
  }
  


}
