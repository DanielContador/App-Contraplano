import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
    @ViewChild('animacion1',{read: ElementRef, static:true}) animacion1!: ElementRef;
    @ViewChild('animacion2', { read: ElementRef, static: true })
  animacion2!: ElementRef;
  @ViewChild('animacion3',{read: ElementRef, static:true}) animacion3!: ElementRef;
  constructor(private toastController:ToastController ,private router:Router, private animationCtrl: AnimationController) {
    
   }
//Animacion
   ngAfterViewInit(){
    const anima1=this.animationCtrl.create()
    .addElement(this.animacion1.nativeElement)
    
    .duration(1000)
    .iterations(1)
    .fromTo('transform', 'translateY(500px)', 'translateY(0px)')
    .fromTo('opacity','0.4','1');

    const anima2=this.animationCtrl.create()
    .addElement(this.animacion2.nativeElement)
    .duration(1000)
    .iterations(1)
    .fromTo('transform', 'translateX(500px)', 'translateX(0px)')
    .fromTo('opacity','0.4','1');

    const anima3=this.animationCtrl.create()
    .addElement(this.animacion3.nativeElement)
    .duration(1400)
    .iterations(Infinity)
    .keyframes([
      { offset: 0, transform: 'translateY(0px)', opacity:1 },
      { offset: 0.5, transform: 'translateY(20px)' , opacity:0.7},
      { offset: 1, transform: 'translateY(0px)',opacity:1 },
   
    ]);

    const animacion=this.animationCtrl.create()
    .duration(3000)
    .iterations(1)
    .addAnimation([anima1,anima2,anima3])

    animacion.play();


   }

   //--------------------------
   ionViewWillEnter(){
    
    localStorage.setItem('ingresar','false');

    
  }

  ngOnInit() {
    localStorage.setItem('ingresar','false');
  }
  ingresar(){
    
    localStorage.setItem('ingresar',"true");
    this.router.navigate(["/home"]);
    this.presentToast("Hola, bienvenido de vuelta!")
    
  }

  async presentToast(msg:string, duracion?:number) {
    const toast = await this.toastController.create({
      position: 'top',
      message: msg,
      duration: duracion?duracion:2000
    });
    toast.present();
  }

}
