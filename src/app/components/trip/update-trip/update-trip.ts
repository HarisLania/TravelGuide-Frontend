import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-update-trip',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './update-trip.html',
  styleUrl: './update-trip.scss',
})
export class UpdateTrip {
  @Input() trip: any;
  @Output() close = new EventEmitter<void>();

  restaurantForm: FormGroup;
  attractionForm: FormGroup;
  activeForm: 'restaurant' | 'attraction' | null = null;
  isGenerated: boolean = false;

  generatedAttraction = {
    name: "Etihad Towers Observation Deck at 300 Admission",
    location: "Al Kasir, ABC Building",
    rating: "Exceptional",
    duration: "2 Hours Trip",
    pickup: "Pickup From Hotel",
    description: "A visit to an observation deck with sweeping views of Abu Dhabi, including refreshments"
  };

  constructor(private fb: FormBuilder) {
    this.restaurantForm = this.fb.group({
      mealTime: [''],
      closeToHotel: [false],
      preferences: [[]],
      description: ['']
    });

    this.attractionForm = this.fb.group({
      attractionTime: [''],
      hotelPickup: [false],
      preferences: [[]],
      description: ['']
    });
  }

  preferences = [
    'Family', 'Couples', 'Business', 'Outdoor Seating', 'Live Music', 'WiFi',
    'Serves Alcohol', 'Vegan Options', 'Gluten Free', 'Pet Friendly', 'Serves Shisha', 'Valet Parking'
  ];

  selectedActivity: any = null;

  selectActivity(activity: any) {
    this.selectedActivity = activity;
  }

  getActivityTime(subType: string): string {
    return subType;
  }

  getActivityIcon(type: string): string {
    return type === 'Restaurant' ? 'restaurant' : 'attractions';
  }

  isMissingMeal(): boolean {
    const meals = this.trip.activities.filter((a: any) => a.type === 'Restaurant').map((a: any) => a.subType);
    return !['Breakfast', 'Lunch', 'Dinner'].every(m => meals.includes(m));
  }

  isMissingAttraction(): boolean {
    const attractions = this.trip.activities.filter((a: any) => a.type === 'Attraction').map((a: any) => a.subType);
    return !['Morning', 'Afternoon', 'Evening'].every(m => attractions.includes(m));
  }

  openForm(type: 'restaurant' | 'attraction') {
    this.activeForm = type;
  }

  togglePreference(preference: string, form: FormGroup) {
    const currentPreferences = form.get('preferences')?.value || [];
    if (currentPreferences.includes(preference)) {
      form.patchValue({ preferences: currentPreferences.filter((p: string) => p !== preference) });
    } else {
      form.patchValue({ preferences: [...currentPreferences, preference] });
    }
  }

  isSelected(preference: string, form: FormGroup): boolean {
    return (form.get('preferences')?.value || []).includes(preference);
  }

  generateActivity() {
    this.isGenerated = true;
  }
}
