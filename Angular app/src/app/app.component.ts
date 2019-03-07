import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { pollutants } from './pollutants';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AQI';
  form1: FormGroup;
  form2: FormGroup;
  pollutants = pollutants;

  constructor(private service: AppService) {
    this.form1 = new FormGroup({
      pollutant: new FormControl(),
      concentration: new FormControl(),
      userName: new FormControl(),
      userEmail: new FormControl('', Validators.email)
    });

    // this.form2 = new FormGroup({
    //   pollutant: new FormControl(),
    //   aqi: new FormControl()
    // });
  }

  ngOnInit() {

  }

  submit() {
    const data = this.form1.getRawValue();
    let obj = {};
    obj[data.pollutant] = data.concentration;
    obj['userName'] = data.userName;
    obj['userEmail'] = data.userEmail;
    this.service.submit(obj).then(res => {

    }).catch( err => {

    });
  }
}
