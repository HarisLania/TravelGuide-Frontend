import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-view-trip',
  imports: [CommonModule],
  templateUrl: './view-trip.html',
  styleUrl: './view-trip.scss',
})
export class ViewTrip {
  @Input() trip: any;
  @Input() isFirst: boolean = false;
  @Input() isLast: boolean = false;
  @Output() close = new EventEmitter<void>();

  constructor(private sanitizer: DomSanitizer) { }

  getMapUrl(): SafeResourceUrl {
    // Attempt to construct a direction map if activities exist, otherwise just search for the city/hotel
    // Format: https://maps.google.com/maps?saddr=Start&daddr=End&output=embed

    let baseUrl = 'https://maps.google.com/maps?output=embed&q=';

    if (this.trip) {
      // Simple approach: Just show the hotel location if no complex route logic desired yet
      // or try to show a path from hotel to last activity?

      // Creating a path: 
      // saddr = Hotel
      // daddr = Activity 1 + to: Activity 2 ...

      // BUT, the free embed often only supports simple directions (A to B) or just a search query.
      // Let's try the directions mode if we have activities.

      if (this.trip.activities && this.trip.activities.length > 0) {
        const start = encodeURIComponent(this.trip.hotel);
        // Take the last activity location as destination
        const lastActivity = this.trip.activities[this.trip.activities.length - 1];
        const end = encodeURIComponent(lastActivity.name + ', ' + lastActivity.location);

        // Construct waypoints if needed? Embed typically supports saddr and daddr.
        // Let's try saddr (Start) and daddr (End).

        return this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://maps.google.com/maps?saddr=${start}&daddr=${end}&output=embed`
        );
      } else {
        // Just show the city/hotel
        const location = encodeURIComponent(this.trip.hotel + ', ' + this.trip.city);
        return this.sanitizer.bypassSecurityTrustResourceUrl(baseUrl + location);
      }
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(baseUrl + 'Dubai');
  }
}
