import { Component } from '@angular/core';
import { CustomDateTimePickerComponent } from './custom-date-time-picker/custom-date-time-picker.component';

@Component({
  selector: 'app-root',
  imports: [CustomDateTimePickerComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
