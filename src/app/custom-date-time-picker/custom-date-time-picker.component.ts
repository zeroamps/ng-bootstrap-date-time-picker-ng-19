import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CustomDateTimePickerDialogComponent } from './custom-date-time-picker-dialog/custom-date-time-picker-dialog.component';

@Component({
  selector: 'app-custom-date-time-picker',
  imports: [ReactiveFormsModule],
  templateUrl: './custom-date-time-picker.component.html'
})
export class CustomDateTimePickerComponent {
  dateTimeRangeControl: FormControl;

  constructor(private _modalService: NgbModal) {
    this.dateTimeRangeControl = new FormControl();
    this.dateTimeRangeControl.markAsTouched();
  }

  select() {
    const options: NgbModalOptions = { centered: true, scrollable: true, size: 'sm' };
    const modal = this._modalService.open(CustomDateTimePickerDialogComponent, options);

    modal.componentInstance.selectedDateTimeRange = this.dateTimeRangeControl.value;

    modal.closed.subscribe((result) => this.dateTimeRangeControl.setValue(result));
  }
}
