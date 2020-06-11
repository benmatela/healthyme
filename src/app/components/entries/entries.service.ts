import { Injectable } from '@angular/core';
import { Entry } from './model/entry';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
  public entries: Entry[] = [
    {id: 1, date: new Date('1/1/1996'), weight: 165, bodyFat: 20},
    {id: 2, date: new Date('1/2/1996'), weight: 164, bodyFat: 19},
    {id: 3, date: new Date('1/3/1996'), weight: 164, bodyFat: 19},
    {id: 4, date: new Date('1/12/1996'), weight: 161, bodyFat: 18},
    {id: 5, date: new Date('12/31/1996'), weight: 167, bodyFat: 20},
    {id: 6, date: new Date('12/1/1996'), weight: 161, bodyFat: 18}
  ];
  
  constructor() { }

  getEntriesArray(): Entry[] {
    return this.entries;
  }

  createEntry(entry: Entry) {
    console.log(entry);
    this.entries.push({ 
      id: this.entries.length + 1, 
      date: entry.date, 
      weight: entry.weight, 
      bodyFat: entry.bodyFat
    });
  }
}
