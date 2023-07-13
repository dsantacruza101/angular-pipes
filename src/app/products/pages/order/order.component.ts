import { Component } from '@angular/core';
import { Hero, Color } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Wonder Woman',
      canFly: true,
      color: Color.red
    },
    {
      name: 'NightWing',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green
    }
  ]

  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrderBy( value: keyof Hero):void {
    this.orderBy = value
  }


}
