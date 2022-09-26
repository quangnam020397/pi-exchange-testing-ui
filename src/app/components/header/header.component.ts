import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isCollapsed = false;

  searchInput = new FormControl('');

  // TODO: set type of userProfile when it available
  userProfile: any = {};

  constructor() {}

  logout(): void {
    // TODO: implement logout
  }

  ngOnInit(): void {}
}
