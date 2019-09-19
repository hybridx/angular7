import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {

  @Output() recipe:EventEmitter<any> = new EventEmitter<any>();

  showRecipes() {
    this.recipe.emit(true);
  }

  showShopping() {
    this.recipe.emit(false);
  }

}
