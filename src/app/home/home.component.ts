import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public list: any;
  public memoryapi
  public memoryinfo
  public single1 = [];
  public single2 = [];
  public dataSet;
  sortedDataBasedOnDate
  DailystateStatus: Array<any> = [{ state: '', confirmed: '', recovered: '', deaths: '', active: '' }];
  DailyStatus: any = { total: '' }
  statewisecase: any = { confirmed: '', active: '', recovered: '', deaths: '' }

  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    let info;
    info = this.httpService.get('https://api.rootnet.in/covid19-in/stats/')
    info.subscribe(res => {
      console.log(res.data.summary);
      this.list = res.data.summary
    })
    this.getInfoBar();
    this.getInfoPie();
  }

  //Bar Graph
  getInfoBar() {
    let info;
    info = this.httpService.get('https://api.rootnet.in/covid19-in/stats/')
    info.subscribe(res => {
      console.log(res.data.summary);
      this.memoryapi = res.data.summary
      console.log("Bar Graph " + this.memoryapi);

      this.single1 = [{
        "name": "Total",
        "value": this.memoryapi.total
      },
      {
        "name": "ConfirmedCaseIndian",
        "value": this.memoryapi.confirmedCasesIndian,
      },
      {
        "name": "Recovered",
        "value": this.memoryapi.discharged,
      },
      // {
      //   "name": "ConfirmedCasesForeign",
      //   "value": this.memoryapi.confirmedCasesForeign
      // },
      {
        "name": "Deaths",
        "value": this.memoryapi.deaths
      }
        // {
        //   "name": "ConfirmedButLocationUnidentified",
        //   "value": this.memoryapi.confirmedButLocationUnidentified
        // }
      ];
    })
  }
  title1 = 'Covid19 Bar Chart';
  view1: any[] = [380, 380];
  // options for the chart
  showXAxis1 = true;
  showYAxis1 = true;
  gradient1 = true;
  showLegend1 = true;
  showXAxisLabel1 = true;
  xAxisLabel1 = 'Cases';
  showYAxisLabel1 = true;
  // yAxisLabel1 = 'Sales';
  timeline1 = true;
  colorScheme1 = {
    domain: ['#FF073A', '#007BFF', '#28A745','#6C757D']
  };
  showLabels1 = true;


  //Pie Chart
  getInfoPie() {
    let info;
    info = this.httpService.get('https://api.rootnet.in/covid19-in/stats/')
    info.subscribe(res => {
      console.log(res.data.summary);
      this.memoryapi = res.data.summary
      console.log("Bar Graph " + this.memoryapi);

      this.single2 = [
        {
          "name": "Deaths",
          "value": this.memoryapi.deaths
        },
        {
          "name": "Total",
          "value": this.memoryapi.total
        },
        {
           "name": "ConfirmedCaseIndian",
          "value": this.memoryapi.confirmedCasesIndian,
        },
        {
          "name": "Recovered",
          "value": this.memoryapi.discharged,
        }
      ];
    })
  }
  title2 = 'Covid19 Pie Chart';
  view2: any[] = [350,350];
  // options for the chart
  gradient2 = true;
  showLegend2 = true;
  showLabels2 = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  colorScheme2 = {
    domain: ['#6C757D','#FF073A', '#007BFF', '#28A745' ]
  };
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
