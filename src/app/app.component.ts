import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 

@Component({
  selector: 'loader',
  standalone: true,
  imports: [RouterOutlet, MatProgressSpinnerModule],
  templateUrl: './loader/loader.html',
  styleUrl: './loader/loader.css'
})
export class AppComponent {
  title = 'G-Storming';
}
