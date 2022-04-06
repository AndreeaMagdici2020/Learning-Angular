
import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   recipes: Recipe[] = [
    new Recipe('Tandoori pork steak', "A spicy pork steak dish best served with steamed basmati or pilau rice, raita, crisp green salad and lemon wedges.", 'assets/pork.jpg'),
    new Recipe('Butternut Squash Stuffed Shells', "Butternut squash stuffed shells are the ultimate fall comfort food! Filled with creamy spinach ricotta, this recipe is an all-time fan favorite.", 'assets/stuffed.jpg'),
  ];
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
    
  }

}
