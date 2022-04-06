import { Recipe } from './../../recipe.model';
import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipes: Recipe;
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSelectRecipe() {
    console.log();
    this.recipeSelected.emit();
    
  }

}
