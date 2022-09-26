import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    LeftNavComponent,
    HeaderComponent,
    SpinnerComponent,
    SearchHeaderComponent,
    PageNotFoundComponent,
    FooterComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    SpinnerComponent,
    LeftNavComponent,
    HeaderComponent,
    SearchHeaderComponent,
    FooterComponent,
  ],
})
export class ComponentsModule {}
