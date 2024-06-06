import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';



@Component({
  selector: 'main-tabs',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: 'mainTabs.html',
  styleUrl: 'mainTabs.css'
})

export class MainTabsComponent {}
