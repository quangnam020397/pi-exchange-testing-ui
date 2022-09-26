import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DATA_ROUTING } from './data';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss'],
})
export class LeftNavComponent implements OnInit {
  @Input() isCollapsed: boolean = false;
  @Output() isCollapsedChange = new EventEmitter<boolean>();

  currentPath = '';

  dataRouting = DATA_ROUTING;

  constructor(public router: Router) {}

  goToItems(path: string) {
    if (path.includes('/')) {
      this.router.navigate([path]);
    }
  }

  ngOnInit() {
    this.currentPath = this.router.url;
  }
}
