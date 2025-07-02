import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { ChartsComponent } from '../charts/charts.component';


@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, MatProgressBarModule, MatFormFieldModule, MatSelectModule,MatIconModule, MatButtonModule, MatInputModule,MatMenuModule, ChartsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
