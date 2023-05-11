import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name:any = undefined;
  Sex:any = undefined;
  Age:any = undefined;
  color:any = undefined;
  food:any = undefined;
  isCheck: boolean = false;
  constructor(private router:Router) {}
  

  clickfuntion() {
    console.log(this.name);
    console.log(this.Sex);
    console.log(this.Age);
    console.log(this.color);
    console.log(this.food);
    console.log(this.isCheck);
  }

  navigetePage1(){
    this.router.navigate(['/page1']);
  }
}
