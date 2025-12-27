import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-hotel',
  imports: [CommonModule],
  templateUrl: './update-hotel.html',
  styleUrl: './update-hotel.scss',
})
export class UpdateHotel {
  @Input() hotel: any;
  @Output() close = new EventEmitter<void>();

  preferences = [
    'Family Rooms', 'SPA', 'Swimming Pool', 'Fitness Center', 'Free Parking', 'Free Wifi',
    'Bar', 'Private Beach', 'Restaurant', 'Pet Friendly', 'Airport Shuttle', 'Room Service'
  ];

  selectedPreferences: string[] = ['Family Rooms', 'SPA', 'Swimming Pool'];

  togglePreference(pref: string) {
    if (this.selectedPreferences.includes(pref)) {
      this.selectedPreferences = this.selectedPreferences.filter(p => p !== pref);
    } else {
      this.selectedPreferences.push(pref);
    }
  }

  isSelected(pref: string): boolean {
    return this.selectedPreferences.includes(pref);
  }

  onClose() {
    this.close.emit();
  }
}
