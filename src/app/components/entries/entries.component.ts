import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EntriesService } from './entries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hm-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
  searchText: string = '';
  showBodyFat: boolean = true;

  public searchElementRef: ElementRef;
  
  constructor(
    public entriesService: EntriesService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  toggleShowBodyFat() {
    this.showBodyFat = this.showBodyFat ? false : true;
  }

  goToNewEntry() {
    this.router.navigate(['/new-entry']);
  }

}
