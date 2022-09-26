import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QueryParamsService } from 'src/app/services/query-params/query-params.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss'],
})
export class SearchHeaderComponent implements OnInit {
  @Output() OnSearch = new EventEmitter();
  @Input() showSearch = true;

  searchControl = new FormControl('');

  constructor(private queryParamsService: QueryParamsService) {
    const searchValue = this.queryParamsService.getParams()['search'] || '';
    if (searchValue) {
      this.searchControl.setValue(searchValue);
    }
  }

  ngOnInit(): void {
    this.searchControl.valueChanges.subscribe(value => {
      if (!value) {
        this.clearSearch();
      }
    });
  }

  clearSearch() {
    this.queryParamsService.setParams({ search: undefined });
    this.OnSearch.emit('');
  }

  handleSearch(value = this.searchControl.value) {
    if (value) {
      this.queryParamsService.setParams({ search: value || undefined });
      this.OnSearch.emit(value);
    }
  }
}
