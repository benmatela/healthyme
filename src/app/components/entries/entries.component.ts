import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EntriesService } from './entries.service';

@Component({
  selector: 'hm-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
  searchText: string = '';
  @ViewChild("search")
  public searchElementRef: ElementRef;
  
  constructor(public entriesService: EntriesService) { }

  ngOnInit(): void {
  }

}
