import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker App</h1>
      <p>Record and track your meals with this handy app. Click on a meal to edit it.</p>
      <hr>
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
})

export class AppComponent {
 public meals: Meal[];
 constructor(){
   this.meals = [
     new Meal("Burrito", 0, "Chicken Burrito with beans and rice", 1000),
     new Meal("Pizza", 1, "1 slice of veggie pizza", 450),
     new Meal("Green Salad", 2, "Small leafy salad with low-fat dressing", 330)
   ];
  }
 mealWasSelected(clickedMeal: Meal): void {
  }
}
