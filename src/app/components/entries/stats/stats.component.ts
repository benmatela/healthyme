import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hm-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @Input() public total: number = 0;
  @Output() public showBodyFat = new EventEmitter();
  show: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleShowBodyFat() {
   if (this.show) {
     this.show = false;
   }
   else {
      this.show = true;
   }
   this.showBodyFat.emit(String(this.show));
  }

  goToNewEntry() {
    this.router.navigate(['/new-entry']);
  }

}
