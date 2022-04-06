import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients = [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)];
  constructor() { }

  ngOnInit(): void {
  }
  addNewIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }

}

//@Input() - child component will expose a property only for the parent component; make a property bindable from the parent component
//EventEmitter is an object in angular which allows you to emit your own events.
//serverCreated - property
// serverCreated=new EventEmitter<{serverName: string, serverContent:string}>();
//<> - tipul 
// serverCreated - va fi un event customizat
//pentru a emite acest event catre parinte - this.serverCreated.emit({serverName:"someName", serverContent:"someContent"});
//@Output() - will make a property listenable from outside/from the parent


//View encapsulation - angular enforce style encapsulation; it gives the same attribute to all elements in a component; it emulates the shadow DOM
//intr-o componenta angular, by default avem ViewEncapsulation.Emulated --> Angular modifies the component's CSS selectors so that they are only applied to the component's view and do not affect other elements in the application.
// #serverName -> local reference to *the whole HTML element, with all its properties*; can be placed on any HTML element
//the local referenca can be used ONLY inside the template, NOT in typescript file, dar il putem transmite ca parametru catre typescript
//<p #text>
//<button (click)="onClick(text)">
//how to access local reference of an HTML element from the inside of the typescript file
//folosind un decorator @ViewChild('serverContentInput',{static:true}) serverContentInput;
//tipul acestui element va fi ElementRef;
//pentru a accesa proprietatea *value* a elementului input din DOM
//this.serverContentInput.nativeElement.value

//default behaviour - continutul plasat in interiorul unei componente angular <app-server><p>hello</p></app-server> este eliminat de angular
//daca vrem ca angular sa recunoasca acest continut trebuie sa folosim directiva <ng-content> in interiorul componentei
//lifecyle hooks
//1. ngOnChanges - se executa prima data la inceput, apoi de fiecare data cand o proprietare se schimba
//2. ngOnInit - cand o componenta este initializata;
//3. ngDoCheck - change detection; cand trebuie schimbata o proprietate in template
//4.ngAfterContentInit 
//...ngOnDestroy