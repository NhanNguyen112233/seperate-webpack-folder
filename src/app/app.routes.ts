import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { MobilePhonesComponent } from './mobile-phones/mobile-phones.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { GamingLaptopsComponent } from './gaming-laptops/gaming-laptops.component';
import { BusinessLaptopsComponent } from './business-laptops/business-laptops.component';
import { ClothingComponent } from './clothing/clothing.component';
import { MenClothingComponent } from './men-clothing/men-clothing.component';
import { WomenClothingComponent } from './women-clothing/women-clothing.component';
import { DressesComponent } from './dresses/dresses.component';
import { ShoesComponent } from './shoes/shoes.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products/electronics', component: ElectronicsComponent },
  {
    path: 'products/electronics/mobile-phones',
    component: MobilePhonesComponent,
  },
  { path: 'products/electronics/laptops', component: LaptopsComponent },
  {
    path: 'products/electronics/laptops/gaming',
    component: GamingLaptopsComponent,
  },
  {
    path: 'products/electronics/laptops/business',
    component: BusinessLaptopsComponent,
  },
  { path: 'products/clothing', component: ClothingComponent },
  { path: 'products/clothing/men', component: MenClothingComponent },
  { path: 'products/clothing/women', component: WomenClothingComponent },
  { path: 'products/clothing/women/dresses', component: DressesComponent },
  { path: 'products/clothing/women/shoes', component: ShoesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'fee', component: AboutComponent },

  { path: 'tpb', component: AboutComponent },

  { path: 'cutomer-group', component: AboutComponent },
  { path: 'connect', component: AboutComponent },
  { path: 'config', component: AboutComponent },
  { path: 'approve', component: AboutComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/home' }, // Wildcard route for a 404 page
];
