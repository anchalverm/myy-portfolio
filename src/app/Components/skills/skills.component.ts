import { Component } from '@angular/core';
import { Skills } from 'src/app/models/model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
skills: Skills[]=[
  {
    name: "Angular, Angular Material",
    level:"Intermediate",
    rating: 80,
},
{
  name: "HTML,CSS,Javascript",
  level:"Expert",
  rating: 90,
},
{
  name: "Git",
  level:"Expert",
  rating: 90,
},
]
}
