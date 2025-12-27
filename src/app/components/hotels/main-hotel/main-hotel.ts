import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateHotel } from '../update-hotel/update-hotel';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-hotel',
  imports: [CommonModule, UpdateHotel, RouterModule],
  templateUrl: './main-hotel.html',
  styleUrl: './main-hotel.scss',
})
export class MainHotel {
  constructor(private router: Router) { }
  selectedHotel: any = null;

  openUpdateModal(hotel: any) {
    this.selectedHotel = hotel;
  }

  closeUpdateModal() {
    this.selectedHotel = null;
  }

  hotels = [
    {
      name: 'Radisson Blu Hotel & Resort, Dubai Waterfront',
      city: 'Dubai',
      location: 'Dubai Marina',
      dates: '16/12/2025 (3 Nights)',
      rating: '4.5/5',
      review: 'Exceptional',
      amenities: 'Bar • Family Rooms • Fitness Center • Free Parking • Free Wifi'
    },
    {
      name: 'Atlantis, The Palm',
      city: 'Abu Dhabi',
      location: 'Palm Jumeirah',
      dates: '20/12/2025 (4 Nights)',
      rating: '4.8/5',
      review: 'Wonderful',
      amenities: 'Beachfront • Waterpark • Spa • Aquarium • multiple Pools'
    },
    {
      name: 'Burj Al Arab Jumeirah',
      city: 'Sharjah',
      location: 'Jumeirah Beach',
      dates: '25/12/2025 (2 Nights)',
      rating: '4.9/5',
      review: 'Luxury',
      amenities: 'Private Beach • Butler Service • Helipad • Fine Dining'
    }
  ];

}
