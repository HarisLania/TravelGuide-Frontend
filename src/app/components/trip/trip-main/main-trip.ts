import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateTrip } from '../update-trip/update-trip';
import { ViewTrip } from '../view-trip/view-trip';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-trip',
  imports: [CommonModule, UpdateTrip, RouterModule, ViewTrip],
  templateUrl: './main-trip.html',
  styleUrl: './main-trip.scss',
})
export class MainTrip {
  selectedTrip: any = null;

  viewTrip: any = null;

  openUpdateModal(trip: any, index: number) {
    this.selectedTrip = trip;
    this.selectedTrip.index = index;
  }

  closeUpdateModal() {
    this.selectedTrip = null;
  }

  openViewModal(trip: any, index: number) {
    this.viewTrip = trip;
    this.viewTrip.index = index;
  }

  closeViewModal() {
    this.viewTrip = null;
  }

  trips = [
    {
      day: 'Day 1: Friday (17-10-2025)',
      airport: 'Dubai International Airport',
      hotel: 'Radisson Blu Trip & Resort, Dubai Waterfront',
      city: 'Dubai',
      activities: [],
    },
    {
      day: 'Day 2: Saturday (18-10-2025)',
      airport: 'Dubai International Airport',
      hotel: 'Radisson Blu Trip & Resort, Dubai Waterfront',
      city: 'Dubai',
      activities: [
        {
          type: 'Restaurant',
          subType: 'Breakfast',
          name: 'Eggcellent Cafe',
          location: 'Jumeirah Beach Road',
          rating: 'Exceptional',
          distance: '~1.1 km from your hotel',
        },
        {
          type: 'Restaurant',
          subType: 'Lunch',
          name: 'Art House Cafe',
          location: 'Al Wasl Road',
          rating: 'Exceptional',
          distance: '~2.5 km from your hotel',
        },
        {
          type: 'Attractions',
          subType: 'After-Lunch',
          name: 'Dubai Aquarium & Underwater Zoo',
          location: 'The Dubai Mall',
          rating: 'Exceptional',
          pickup: 'No',
        },
        {
          type: 'Restaurant',
          subType: 'Dinner',
          name: 'R b Grillhouse Restaurant',
          location: 'Dubai Marina',
          rating: 'Exceptional',
          distance: '~5.0 km from your hotel',
        },
        {
          type: 'Attractions',
          subType: 'After-Dinner',
          name: 'The Dubai Fountain Show',
          location: 'Downtown Dubai',
          rating: 'Exceptional',
          pickup: 'Hotel',
        },
      ],
    },
    {
      day: 'Day 3: Sunday (19-10-2025)',
      airport: 'Dubai International Airport',
      hotel: 'Radisson Blu Trip & Resort, Dubai Waterfront',
      city: 'Dubai',
      activities: [
        {
          type: 'Restaurant',
          subType: 'Breakfast',
          name: 'Arabian Tea House',
          location: 'Al Fahidi Historical Neighbourhood',
          rating: 'Exceptional',
          distance: '~8.0 km from your hotel',
        },
        {
          type: 'Attractions',
          subType: 'After-Breakfast',
          name: 'Museum of the Future',
          location: 'Sheikh Zayed Road',
          rating: 'Exceptional',
          pickup: 'Hotel',
        },
        {
          type: 'Restaurant',
          subType: 'Lunch',
          name: 'Al Ustad Special Kebab',
          location: 'Al Mankhool',
          rating: 'Exceptional',
          distance: '~6.5 km from your hotel',
        },
        {
          type: 'Restaurant',
          subType: 'Dinner',
          name: 'Bu Qtair',
          location: 'Umm Suqeim',
          rating: 'Exceptional',
          distance: '~10.0 km from your hotel',
        },
        {
          type: 'Attractions',
          subType: 'After-Dinner',
          name: 'Dubai Garden Glow',
          location: 'Zabeel Park',
          rating: 'Exceptional',
          pickup: 'Hotel',
        },
      ],
    },
    {
      day: 'Day 4: Monday (20-10-2025)',
      airport: 'Dubai International Airport',
      hotel: 'Radisson Blu Trip & Resort, Dubai Waterfront',
      city: 'Dubai',
      activities: [],
    },
    {
      day: 'Day 5: Tuesday (21-10-2025)',
      airport: 'Dubai International Airport',
      hotel: 'Radisson Blu Trip & Resort, Dubai Waterfront',
      city: 'Dubai',
      activities: [
        {
          type: 'Attractions',
          subType: 'After-Breakfast',
          name: 'Kite Beach',
          location: 'Umm Suqeim',
          rating: 'Exceptional',
          pickup: 'Hotel',
        },
        {
          type: 'Restaurant',
          subType: 'Lunch',
          name: 'Ravi Restaurant',
          location: 'Satwa',
          rating: 'Exceptional',
          distance: '~4.5 km from your hotel',
        },
        {
          type: 'Attractions',
          subType: 'After-Lunch',
          name: 'Wild Wadi Waterpark',
          location: 'Jumeirah Street',
          rating: 'Exceptional',
          pickup: 'No',
        },
        {
          type: 'Restaurant',
          subType: 'Dinner',
          name: 'Nusr-Et Steakhouse',
          location: 'Four Seasons Resort',
          rating: 'Exceptional',
          distance: '~3.5 km from your hotel',
        },
        {
          type: 'Attractions',
          subType: 'After-Dinner',
          name: 'Souk Madinat Jumeirah',
          location: 'King Salman Bin Abdulaziz Al Saud St',
          rating: 'Exceptional',
          pickup: 'Hotel',
        },
      ],
    },
    {
      day: 'Day 6: Wednesday (22-10-2025)',
      airport: 'Dubai International Airport',
      hotel: 'Conrad Abu Dhabi Etihad Towers',
      city: 'Abu Dhabi',
      activities: [
        {
          type: 'Restaurant',
          subType: 'Breakfast',
          name: 'Cafe 302',
          location: 'Hamdan Street',
          rating: 'Exceptional',
          distance: '~2.0 km from your hotel',
        },
        {
          type: 'Attractions',
          subType: 'After-Breakfast',
          name: 'Sheikh Zayed Grand Mosque',
          location: 'Sheikh Rashid Bin Saeed St',
          rating: 'Exceptional',
          pickup: 'Hotel',
        },
        {
          type: 'Restaurant',
          subType: 'Lunch',
          name: 'Mijana',
          location: 'The Ritz-Carlton',
          rating: 'Exceptional',
          distance: '~15.0 km from your hotel',
        },
        {
          type: 'Attractions',
          subType: 'After-Lunch',
          name: 'Louvre Abu Dhabi',
          location: 'Saadiyat Island',
          rating: 'Exceptional',
          pickup: 'No',
        },
        {
          type: 'Restaurant',
          subType: 'Dinner',
          name: 'Hakkasan',
          location: 'Emirates Palace',
          rating: 'Exceptional',
          distance: '~0.5 km from your hotel',
        },
        {
          type: 'Attractions',
          subType: 'After-Dinner',
          name: 'Observation Deck at 300',
          location: 'Etihad Towers',
          rating: 'Exceptional',
          pickup: 'Hotel',
        },
      ],
    },
    {
      day: 'Day 7: Thursday (23-10-2025)',
      airport: 'Dubai International Airport',
      hotel: 'Conrad Abu Dhabi Etihad Towers',
      city: 'Abu Dhabi',
      activities: [
        {
          type: 'Restaurant',
          subType: 'Breakfast',
          name: 'Art House Cafe',
          location: 'Al Bateen',
          rating: 'Exceptional',
          distance: '~4.0 km from your hotel',
        },
        {
          type: 'Attractions',
          subType: 'After-Breakfast',
          name: 'Qasr Al Watan',
          location: 'Al Ras Al Akhdar',
          rating: 'Exceptional',
          pickup: 'Hotel',
        },
        {
          type: 'Restaurant',
          subType: 'Lunch',
          name: 'Punjab Grill',
          location: 'Venetian Village',
          rating: 'Exceptional',
          distance: '~16.0 km from your hotel',
        },
        {
          type: 'Attractions',
          subType: 'After-Lunch',
          name: 'Ferrari World Abu Dhabi',
          location: 'Yas Island',
          rating: 'Exceptional',
          pickup: 'No',
        },
        {
          type: 'Restaurant',
          subType: 'Dinner',
          name: 'Villa Toscana',
          location: 'Corniche Road',
          rating: 'Exceptional',
          distance: '~1.0 km from your hotel',
        },
      ],
    },
    {
      day: 'Day 8: Friday (24-10-2025)',
      airport: 'Dubai International Airport',
      hotel: 'Sheraton Sharjah Beach Resort & Spa',
      city: 'Sharjah',
      activities: [
        {
          type: 'Restaurant',
          subType: 'Breakfast',
          name: 'Crisol Restaurant and Lounge',
          location: 'University City Rd',
          rating: 'Exceptional',
          distance: '~10.0 km from your hotel',
        },
        {
          type: 'Attractions',
          subType: 'After-Breakfast',
          name: 'Sharjah Museum of Islamic Civilization',
          location: 'Al Majarrah',
          rating: 'Exceptional',
          pickup: 'Hotel',
        },
        {
          type: 'Restaurant',
          subType: 'Lunch',
          name: 'Shababeek',
          location: 'Al Qasba',
          rating: 'Exceptional',
          distance: '~12.0 km from your hotel',
        },
        {
          type: 'Attractions',
          subType: 'After-Lunch',
          name: 'Rain Room',
          location: 'Al Majarrah',
          rating: 'Exceptional',
          pickup: 'No',
        },
        {
          type: 'Attractions',
          subType: 'After-Dinner',
          name: 'Al Majaz Waterfront',
          location: 'Khalid Lake Trail',
          rating: 'Exceptional',
          pickup: 'Hotel',
        },
      ],
    },
    {
      day: 'Day 9: Saturday (25-10-2025)',
      airport: 'Dubai International Airport',
      hotel: 'Sheraton Sharjah Beach Resort & Spa',
      city: 'Sharjah',
      activities: [
        {
          type: 'Restaurant',
          subType: 'Breakfast',
          name: 'Paper Fig Desserts',
          location: 'University City',
          rating: 'Exceptional',
          distance: '~11.0 km from your hotel',
        },
        {
          type: 'Restaurant',
          subType: 'Lunch',
          name: 'Gazebo Restaurant',
          location: 'King Faisal St',
          rating: 'Exceptional',
          distance: '~8.0 km from your hotel',
        },
        {
          type: 'Attractions',
          subType: 'After-Lunch',
          name: 'Blue Souk',
          location: 'King Faisal St',
          rating: 'Exceptional',
          pickup: 'No',
        },
        {
          type: 'Restaurant',
          subType: 'Dinner',
          name: 'Fen Cafe',
          location: 'Al Majarrah',
          rating: 'Exceptional',
          distance: '~6.0 km from your hotel',
        },
        {
          type: 'Attractions',
          subType: 'After-Dinner',
          name: 'Al Noor Island',
          location: 'Khalid Lagoon',
          rating: 'Exceptional',
          pickup: 'Hotel',
        },
      ],
    },
    {
      day: 'Day 10: Sunday (26-10-2025)',
      airport: 'Dubai International Airport',
      hotel: 'Radisson Blu Trip & Resort, Dubai Waterfront',
      city: 'Dubai',
      activities: [
        {
          type: 'Attractions',
          subType: 'After-Dinner',
          name: 'Al Noor Island',
          location: 'Khalid Lagoon',
          rating: 'Exceptional',
          pickup: 'Hotel',
        },
      ],
    },
  ];
}
