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
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, MatProgressBarModule, MatFormFieldModule, MatSelectModule,MatIconModule, MatButtonModule, MatInputModule,MatMenuModule, ChartsComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
public stockData: { name: string, price: number, color: string }[] = [
  {
    "name": "Money Market",
    "price": 6279,
    "color": "rgb(189, 47, 225)"
  },
    {
      "name": "stock",
      "price": 4563,
      "color": "aquamarine"
    },
    {
      "name": "Bonds",
      "price": 3561,
      "color": "rgb(6, 212, 123)"
    },
    {
      "name": "SIP",
      "price": 2963,
      "color": "rgb(103, 101, 112)"
    }
  ]
getPrecentage(name: string): string {
  const total = this.stockData.reduce((acc, asset) => acc + asset.price, 0);
  const asset = this.stockData.find(asset => asset.name === name);
  if (!asset || total === 0) return '0%';
  return ((asset.price / total) * 100).toFixed(2) + '%';
}

//card header
   summaryCards = [
    {
      title: 'My Investment Asset',
      value: 178975.72,
      change: 170.43,
      changeType: 'positive',
      icon: 'groups',
      iconClass: 'asset-icon'
    },
    {
      title: 'Yearly Profits',
      value: 88742.25,
      percentage: 10,              // % Increase
      change: 150.56,
      changeType: 'positive',
      icon: 'attach_money',
      iconClass: 'profit-icon'
    },
    {
      title: 'Profit Margin',
      value: 48632.67,
      percentage: 4.23,            // % Decrease
      change: 123.65,
      changeType: 'negative',
      icon: 'account_balance_wallet',
      iconClass: 'margin-icon'
    }
  ];
}