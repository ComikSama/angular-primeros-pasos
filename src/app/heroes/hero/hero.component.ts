import { Component } from '@angular/core';

@Component({
  // app-hero-list
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public realName: string = 'Tony Stark';
  public age: number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void{
    this.name = 'Spiderman';
    this.realName = 'Peter Parker';
  }

  changeAge(): void{
    this.age = 20
  }

  resetForm(): void{
    //this.name = 'Ironman';
    //this.realName = 'Tony Stark';
    this.age = 45;

    document.querySelectorAll('h1')!.forEach ( element => {
      element.innerHTML = '<h1>Desde Angular</h1>'
    })
  }
}
