import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { ButtonOverviewComponent } from '../button-overview/button-overview.component';
import { HousingService} from '../housing.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
    ButtonOverviewComponent,
    ],
  template: `
    <section class="content">
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>

    <section class="results">
      <app-housing-location
      *ngFor="let housingLocation of housingLocationList"
      [housingLocation]="housingLocation">
      </app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css'
})
  export class HomeComponent {
    housingLocationList: HousingLocation[] = [];
    housingService: HousingService = inject(HousingService);

    constructor() {
      this.housingLocationList = this.housingService.getAllHousingLocations();

  }
}
