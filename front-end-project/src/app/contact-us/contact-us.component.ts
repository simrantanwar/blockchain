import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
name="";
email="";
company="";
subject="";

  constructor() { }

  ngOnInit() {
  }
submit()
{
  alert('Contact form has been submitted successfully')
}
}
