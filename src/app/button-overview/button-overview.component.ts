import { Component } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-button-overview',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  template: `
    <p>
      button-overview works!
    </p>
    <section>
      <div class="search-label">Menu</div>
        <div class="search-button-row">
          <button mat-raised-button color="accent">Accent</button>
          <a mat-raised-button href="https://material.angular.io/components/button/overview" target="_blank">Link</a>
        </div>
      </section>
    <mat-divider></mat-divider>
  `,
  styleUrl: './button-overview.component.css'
})
export class ButtonOverviewComponent {

}
