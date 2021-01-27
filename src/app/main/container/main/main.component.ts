import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('searchAnimation', [
      state(
        'false',
        style({
          width: '*',
        })
      ),
      state(
        'true',
        style({
          width: 'calc(100% - 45px)',
        })
      ),
      transition('* <=> *', animate('250ms ease-in')),
    ]),
  ],
})
export class MainComponent implements OnInit {
  public isSearchOpen: boolean;
  public isFiltersOpen: boolean;
  public searchControl = new FormControl();
  public filtersForm: FormGroup;

  constructor() {
    this.initForm();
  }

  ngOnInit(): void {}

  public openSearch(e) {
    if (e) {
      e.stopPropagation();
    }
    this.isSearchOpen = true;
  }

  public openFilters() {
    this.isFiltersOpen = true;
  }

  public clearSearch() {
    this.searchControl.setValue('');
  }

  public closeSearch() {
    this.isSearchOpen = false;
    this.isFiltersOpen = false;
  }

  private initForm() {
    this.filtersForm = new FormGroup({
      isMyBooks: new FormControl(false),
      author: new FormControl(''),
      sortBy: new FormControl('date'),
      participant: new FormControl(false),
      inTitle: new FormControl(true),
      strictSearch: new FormControl(false),
    });
  }
}
