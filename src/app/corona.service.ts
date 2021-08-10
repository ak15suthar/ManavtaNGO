import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  data1
  state
  district
  BannerData: BehaviorSubject<any> = new BehaviorSubject('')
  districtdata: Subject<any> = new Subject<any>();

  constructor(private http:HttpClient) { }


  url_statewise = 'https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise'
  url_dailycases = 'https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history'
  ulr_districtwise = "https://api.covid19india.org/state_district_wise.json"
  url_banner = "https://api.covid19india.org/website_data.json"
  url_contact = "https://api.rootnet.in/covid19-in/contacts"

  ngOnInit(): void {

    this.getDataStateWise()
  }

  getContact():Observable<any>{
    return this.http.get(this.url_contact);
  }

  getBanners(): Observable<any> {
    return this.http.get(this.url_banner)
  }

  getDataStateWise(): Observable<any> {
    return this.http.get(this.url_statewise)
  }

 getDailyCaseStatus(): Observable<any> {
    return this.http.get(this.url_dailycases)
  }

  getState(state) {
    this.state = state
  }

  getDataDistrictWise(state) {
    this.http.get(this.ulr_districtwise).subscribe(data => {
      this.data1 = data
    //  console.log(this.data1)
   //   console.log(this.data1[state])
      this.district = this.data1[state].districtData
    //  console.log(state)
      this.districtdata.next(this.district)
    }
    )
  }
}
