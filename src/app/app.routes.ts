import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { TouristForm } from './components/tourist-form/tourist-form';
import { Layout } from './components/layout/layout';
import { MainHotel } from './components/hotels/main-hotel/main-hotel';
import { MainTrip } from './components/trip/trip-main/main-trip';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'tourist-form', component: TouristForm },
      { path: 'hotels', component: MainHotel },
      { path: 'trip', component: MainTrip },
    ]
  }
];
