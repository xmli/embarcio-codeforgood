import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName: string = "seanli";
  url: string = "";
  data: any = {};
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.url.subscribe(sa => {
      this.url = "";
      sa.forEach(value => this.url += `/${value}`)
    });
    this.activatedRoute.params.subscribe(p => this.userName = p['username']);
    this.activatedRoute.data.subscribe(d => this.data = d);
  }

}
