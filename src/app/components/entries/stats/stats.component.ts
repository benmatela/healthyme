import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hm-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @Input() public total: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
