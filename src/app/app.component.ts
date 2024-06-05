import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [RouterOutlet, MatProgressSpinnerModule],
  templateUrl: './loader/loader.html',
  styleUrl: './loader/loader.css',
})

@Component({
  selector: 'main-tabs',
  standalone: true,
  imports: [RouterOutlet, MatTabsModule],
  templateUrl: './mainTabs/mainTabs.html',
  styleUrl: './mainTabs/mainTabs.css'
})

export class AppComponent {
  title = 'G-Storming';
}
