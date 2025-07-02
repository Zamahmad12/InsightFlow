import { Component } from '@angular/core';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
@Component({
  selector: 'app-root',
  imports: [ DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InsightFlow';
}
