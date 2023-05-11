import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component  implements OnInit {

  age!: number;
  gender!: string;
  weight!: number;
  height!: number;
  bmrResult!: number;
  bmrLevele!: string;
  public alertButtons = ['OK'];
  constructor() { }

  ngOnInit() {}

  Cal_BMR(){
      if(this.gender == 'Male'){
        this.bmrResult = (10 * this.weight) + (6.25 * this.height) - (5 * this.age) + 5;
      }else if(this.gender == 'Female'){
        this.bmrResult = (10 * this.weight) + (6.25 * this.height) - (5 * this.age) - 161;
      }
  }

}
