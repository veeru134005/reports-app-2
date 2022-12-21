import { Component, OnInit } from '@angular/core';
import { UserReports } from '../classes/UserApi';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  reportsData:UserReports[]=[{"name":"raju",
  "userId":0,
  "email":"raju @gmail.com",
  "mobileNum": 455,
  "gender":"M",
  "ssn":20,
  "planStatus":"Apprved"

},{"name":"djdj",
"userId":0,
"email":"raju @gmail.com",
"mobileNum": 455,
"gender":"M",
"ssn":20,
"planStatus":"Denied"

},{"name":"Hair",
"userId":0,
"email":"raju @gmail.com",
"mobileNum": 455,
"gender":"M",
"ssn":20,
"planStatus":"Apprved"

}];

  planName=[{
    "planName":"Arogya"
  },
  {
    "planName":"Vidya"
  },
  {
    "planName": "Retirment"
  }];

  planStatus=[{
    "status":"Approved"
  },
  {
    "status":"Denied"
  },
  {
    "status": "In Progress"
  }];

  ngOnInit(): void {

  }

}
