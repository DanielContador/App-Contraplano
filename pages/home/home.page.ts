import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiwpService } from 'src/app/services/apiwp.service';
import { MenuController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  selectedCategoryId: number | undefined;
  filteredPosts: any[] = [];
  categories: any[] = [];
  loading: any;
  categoriesVisible: boolean = false;
  id:any;
  public buttonClicked: boolean = false;
  public EdicClicked: boolean = false;
  len: any;
  constructor(public loadingController: LoadingController ,private menuCtrl:MenuController ,private api:ApiwpService ,private router:Router ,private http: HttpClient) {
  this.getNewCate();
    
  }
  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Cargando noticias...',
      duration: 2000
    });
    await this.loading.present();
  
    
  }
  

  hideMenu(){
    this.menuCtrl.toggle();
  }

  getNewCate(){
    
        // Retrieve the categories from the API
        this.api.getCategory().subscribe((categories: any[]) => {
          // Initialize the categories object
          categories.forEach((category) => {
            this.categories[category.id] = {
              id: category.id,
              name: category.name,
              posts: []
            };
          });
        
          
          // Retrieve the news items from the API
          this.presentLoading();
          this.api.getNews().subscribe((posts: any[]) => {
            // Iterate over the news items and assign them to the appropriate category
            
            posts.forEach((post) => {
              const category = this.categories[post.categories[0]];
              if (category) {
                category.posts.push(post);
                
              }
            });
            this.loading.dismiss();
          });
          
        });
        
  }




  goToHome() {
    this.router.navigate(['/home']);
  }


  onCategoryClick(category: any) {
    this.len=false;
    this.selectedCategoryId = category.id;
    console.log(this.filteredPosts)
    this.buttonClicked=false;
    
    
      if (this.selectedCategoryId) {
        this.filteredPosts = this.categories[this.selectedCategoryId].posts;
      }


      if (this.filteredPosts.length ==0){
        this.len=true;
      }
    

    console.log(this.filteredPosts.length)
  }
  


  ngOnInit() {
    
    this.filteredPosts = this.categories;
    this.buttonClicked = false;
    
  }

  vermas(id:any){
    console.log(id);
    this.id=id;
    localStorage.setItem('id',this.id);
    this.router.navigate(['/noticia']);
    
  }

  salir(){
    localStorage.setItem('ingresar','false');
    this.router.navigate(["/inicio"])
  }

  segmentChanged($event:any){    
    let direccion=$event.detail.value;
    console.log(direccion);
    this.router.navigate(['home/'+direccion]);
  }

  

  public onButtonClick(id:any) {
    localStorage.setItem('id',id);
    this.buttonClicked = !this.buttonClicked;
    this.router.navigate(['home/noticia']);
    this.EdicClicked=false;
  }

  public onEdicClick() {
    this.buttonClicked=false;
    this.EdicClicked = !this.EdicClicked;
    this.router.navigate(['home/edicioncom']);
    
  }
}
