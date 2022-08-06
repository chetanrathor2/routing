import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements  DoCheck {
  id : string | null='';
  constructor(private rt:ActivatedRoute) { }

  ngDoCheck(): void {
    
    this.id = this.rt.snapshot.paramMap.get('id');
  }
    
  

}
