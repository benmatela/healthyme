import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, RequiredValidator, Validators } from '@angular/forms';
import { EntriesService } from '../entries.service';
import { Entry } from '../model/entry';
import { Router } from '@angular/router';

@Component({
  selector: 'hm-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent implements OnInit {
  entryForm: FormGroup;
  entry: Entry = new Entry();

  constructor(
    private entryService: EntriesService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.entryForm = new FormGroup({
      weight: new FormControl('', [Validators.required]),
      bodyFat: new FormControl('', [])
    });
  }

  public hasError = (controlName: string, errorName: string): boolean => {
    return this.entryForm.controls[controlName].hasError(errorName);
  }

  createEntry(formValue) {
    this.entry.date = new Date();
    this.entry.weight = formValue['weight'];
    this.entry.bodyFat = formValue['bodyFat'];
    this.entryService.createEntry(this.entry);
    this.router.navigate(['/entries']);
  }

}
