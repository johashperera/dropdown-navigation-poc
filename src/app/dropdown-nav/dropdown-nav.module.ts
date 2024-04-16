import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownNavComponent } from './dropdown-nav.component';
import { FormIncompleteComponent } from './form-incomplete.component';
import { FormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DropdownNavComponent, FormIncompleteComponent],
  imports: [CommonModule, FormsModule, NgbAccordionModule, NgbAlertModule],
  exports: [DropdownNavComponent],
})
export class DropdownNavModule {}
