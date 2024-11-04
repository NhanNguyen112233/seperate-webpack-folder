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
  { path: 'home', loadComponent: () => HomeComponent },
  { path: 'products/electronics', loadComponent: () => ElectronicsComponent },
  {
    path: 'products/electronics/mobile-phones',
    loadComponent: () => MobilePhonesComponent,
  },
  {
    path: 'products/electronics/laptops',
    loadComponent: () => LaptopsComponent,
  },
  {
    path: 'products/electronics/laptops/gaming',
    loadComponent: () => GamingLaptopsComponent,
  },
  {
    path: 'products/electronics/laptops/business',
    loadComponent: () => BusinessLaptopsComponent,
  },
  { path: 'products/clothing', loadComponent: () => ClothingComponent },
  { path: 'products/clothing/men', loadComponent: () => MenClothingComponent },
  {
    path: 'products/clothing/women',
    loadComponent: () => WomenClothingComponent,
  },
  {
    path: 'products/clothing/women/dresses',
    loadComponent: () => DressesComponent,
  },
  {
    path: 'products/clothing/women/shoes',
    loadComponent: () => ShoesComponent,
  },
  { path: 'about', loadComponent: () => AboutComponent },
  { path: 'fee', loadComponent: () => AboutComponent },

  { path: 'tpb', loadComponent: () => AboutComponent },

  { path: 'cutomer-group', loadComponent: () => AboutComponent },
  { path: 'connect', loadComponent: () => AboutComponent },
  { path: 'config', loadComponent: () => AboutComponent },
  { path: 'approve', loadComponent: () => AboutComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/home' }, // Wildcard route for a 404 page
];
