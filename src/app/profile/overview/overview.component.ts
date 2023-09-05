import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { MainLayoutService } from 'src/app/main-layout/main-layout.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public chart: any;
  constructor(public layoutService:MainLayoutService) { }
  
  ngOnInit(): void {
    this.createChart();
  }
  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: ['Feb', 'Mar', 'Apr','May',
								 'Jun', 'July' ], 
        
	       datasets: [
          {
            borderRadius: 30,
            borderSkipped: false,
            borderWidth: 0,
            label: "Net Profit",
            data: ['44','55', '57', '56', '61',
								 '58'],
            backgroundColor: 'rgb(62, 151, 255)',
            
          },
          {
            borderRadius: 30,
            borderSkipped: false,
            label: "Revenue",
            data: ['76', '85', '101', '98', '87',
									 '105'],
            backgroundColor: 'rgb(219, 223, 233)'
          }  
        ]
      },
      options: {
        aspectRatio:2,
      }
    });
  }
}
