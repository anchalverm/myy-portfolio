import { Component } from '@angular/core';
import { Education, WorkExperience } from 'src/app/models/model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
educationList: Education[]=[
  {
  institute:'GVIC',
    course:'SSC',
    duration:'2009-2010',
    score:'78.5%',
  },
  {
    institute:'Modern Era Public School',
      course:'HSC',
      duration:'2011-2012',
      score:'64.5%',
    },
    {
      institute:'Graphic Era University',
        course:'B.Tech',
        duration:'2012-2016',
        score:'8.1',
      },
      {
        institute:'Dr. A.P.J Abdul Kalam Technical University',
          course:'MBA',
          duration:'2016-2018',
          score:'8.1',
        }


]
workExperienceList: WorkExperience[]=[
  {
  role: "Young Professional",
  company: "Ministry of Ayush",
  duration:"february 2021- november 2022",
  description:[""]
},
{
  role: "Trainee Software Engineer",
  company: "Infinity Labs Pvt Limited",
  duration:"1st November 2022-now",
  description:["worked with multiple teams to develop desktop and responsive web Application",
  ""]
}
]
}
