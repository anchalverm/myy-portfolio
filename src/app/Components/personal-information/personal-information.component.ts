import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Anchal Verma'],
    ['DOB', '03/10/1995'],
    ['Work Exp', '2.6 Years'],
    ['Education', 'MBA(2018), B.Tech(CS) (2016)'],
  ]
  aboutMe: string[] = [
    'I am a dedicated and enthusiastic professional with 2.6 years of experience in the field. I began my career as a young professional at the Ministry of Ayush, where I gained valuable insights into the industry. Currently, I am working as a trainee software engineer at Infinity Labs, where I am further honing my technical skills.',
    ' One of my strengths is my commitment to continuous learning and self-improvement. I strive to stay updated with the latest advancements in technology and regularly enhance my skills. This helps me stay ahead of the curve and contribute effectively to my projects.'
  ]
  constructor() { }
  ngOnInit(): void {

  }

}
