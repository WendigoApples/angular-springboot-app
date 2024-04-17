import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
  ],
  template:`
    <main>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Honk&display=swap" rel="stylesheet">
    </head>
      <header class="brand-name">
        <H1 id="host" class="mainH1"> Lets find a home! </H1>
        <img class="brand-logo" src="/assets/img/pp23.svg" alt="logo" aria-hidden="true">
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  })
  export class AppComponent {
  title = 'homes';
}
