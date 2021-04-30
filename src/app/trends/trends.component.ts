import { Component, OnInit } from '@angular/core';
import { TrendsService } from '../services/trends.service';

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
  xAxisLabel = 'Skills';
  showYAxisLabel = true;
  yAxisLabel = 'Number';
  legendTitle: string = 'Years';

  colorScheme = {
    domain: ['#540D6E', '#EE4266', '#FFD23F', '#3BCEAC', '#EAD69']
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

  public activeTrend(mode: string): void{
    if(mode==='first'){
      this.first=true;
      this.second=false;
      this.xAxisLabel="Skills"
    }
    if(mode==='second'){
      this.first=false;
      this.second=true;
      this.xAxisLabel="Locations"
    }
  }

  ngOnInit() {
    this.getTrends();
  }
  onSelect(event) {
    console.log(event);
  }
  onActivate(locations): void {
    console.log('Activate', JSON.parse(JSON.stringify(locations)));
  }

  onDeactivate(locations): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(locations)));
  }

}
