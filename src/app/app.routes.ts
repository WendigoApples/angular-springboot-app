import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';


// Define the routes for the application   
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page Homie!'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home Details Bro!'
  }
];

// Export the routes for use in the application  
export default routeConfig;


