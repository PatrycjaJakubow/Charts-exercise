import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { MainComponent } from "./main/main.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SideNavComponent, MainComponent, FontAwesomeModule, ChartModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard';
}
