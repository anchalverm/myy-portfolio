import { Component } from '@angular/core';
import { Project } from 'src/app/models/model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] =[
    {
      title:"fyxit Customer Web Application",
      technologies:"Angular,Typescript,HTML,SCSS",
      description: ["Develop Fyxit Customer Web Application it is an ecommerce website using Angular and integrate APIs to enhance the website's functionality. "]
  },
  {
    title:"Fyxit Ticket Managment System",
    technologies:"Angular,Typescript,HTML,SCSS",
    description: ["Collaborated with the team to implement a comprehensive ticket management system based on the Fyxit Customer Web Application, ensuring seamless communication and coordination between support agents and customers."]
},
{
  title:"SDWAN Infinxt",
  technologies:"Angular,Typescript,HTML,SCSS",
  description: [""]
},

]

}
