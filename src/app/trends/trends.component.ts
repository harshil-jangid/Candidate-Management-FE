import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js'
import { TrendsService } from '../trends.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {


  constructor(private trendsService: TrendsService) { }

  public locations: any;
  public skills: any;

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Location';
  showYAxisLabel = true;
  yAxisLabel = 'Number';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  public getTrends(): void {
    this.trendsService.getLocation().subscribe((data) => {
      this.locations = data;
    });
    this.trendsService.getSkills().subscribe((data) => {
      this.skills = data;
    });
  }

  first=true;
  second=false;
  third=false;

  public activeTrend(mode: string): void{
    if(mode==='first'){
      this.first=true;
      this.second=false;
      this.third=false;
    }
    if(mode==='second'){
      this.first=false;
      this.second=true;
      this.third=false;
    }
    if(mode==='third'){
      this.first=false;
      this.second=false;
      this.third=true;
    }
  }

  ngOnInit() {
    this.getTrends();
  }
  onSelect(event) {
    console.log(event);
  }

}
