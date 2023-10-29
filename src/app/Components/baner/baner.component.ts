import { Component,OnInit,HostBinding,ElementRef  } from '@angular/core';
import { BreakpointObserver,LayoutModule,Breakpoints } from '@angular/cdk/layout';
import { ResponsiveDirective } from 'src/app/directives/responsive.directive';


@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.scss'],
})
export class BanerComponent implements OnInit {
 
  constructor(private breakpointObserver:BreakpointObserver,private element:ElementRef){

  }
  ngOnInit(): void {
    
  }

}
