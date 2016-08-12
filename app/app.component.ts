import{Component} from 'angular2/core';
import{Meal} from './meal.model';


@Component({
  selector: 'my-app',
  directives: [],
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <meal-list
    [mealList]="meals"
    (onMealSelect)="mealWasSelected($event)">
    </meal-list>
  </div>
  `
})

export class AppComponent{
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Pizza", "1 slice of pepperoni pizza", 550),
      new Meal("Sandwich", "Half a turkey and cheese sandwich", 475)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
  }
}
