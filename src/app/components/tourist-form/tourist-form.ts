import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tourist-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    RouterModule
  ],
  templateUrl: './tourist-form.html',
  styleUrl: './tourist-form.scss',
})


export class TouristForm {
  constructor(private router: Router) { }
  touristForm = new FormGroup({
    arrivalAirport: new FormControl('', Validators.required),
    departureAirport: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    tripType: new FormControl('', Validators.required),
    selectedCities: new FormControl([], Validators.required),
  });

  airports = ['Dubai (DXB)', 'Abu Dhabi (AUH)', 'Sharjah (SHJ)', 'Al Maktoum (DWC)'];
  tripTypes = ['Leisure', 'Business', 'Family', 'Adventure', 'Luxury'];
  cities = [
    { name: 'Dubai', checked: false },
    { name: 'Abu Dhabi', checked: false },
    { name: 'Sharjah', checked: false },
    { name: 'Ras Al-Khaimah', checked: false },
    { name: 'Ajman', checked: false },
  ];

  onSubmit() {
    console.log(this.touristForm.value);
    this.router.navigate(['/hotels']);
  }

  toggleCity(city: string) {
    const currentCities = this.touristForm.get('selectedCities')?.value as string[] || [];
    if (currentCities.includes(city)) {
      this.touristForm.patchValue({ selectedCities: currentCities.filter(c => c !== city) });
    } else {
      this.touristForm.patchValue({ selectedCities: [...currentCities, city] });
    }
  }
}
