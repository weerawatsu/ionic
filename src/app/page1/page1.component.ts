import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component  implements OnInit {
  
  weight!: number;
  height!: number;
  bmiResult!: number;
  bmiLevele!: string;
  public alertButtons = ['OK'];
  constructor() { }

  ngOnInit() {}

  Cal_BMI(){
    this.bmiResult = this.weight / (this.height * this.height);
    if(this.bmiResult < 18.5){
      this.bmiLevele = 'Underweight';
    }
    else if(this.bmiResult >= 18.5 && this.bmiResult <= 24.9){
      this.bmiLevele = 'Normal';
    }
    else if(this.bmiResult >= 24.9 && this.bmiResult <= 29.9){
      this.bmiLevele = 'Overweight';
    }
    else if(this.bmiResult >= 29.9 && this.bmiResult <= 34.9){
      this.bmiLevele = 'Obese';
    }
    else if(this.bmiResult > 34.9){
      this.bmiLevele = 'Extremely Obese';
    }
    console.log(this.bmiResult);
  }
}
