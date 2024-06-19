import { Routes } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';
import { GoodsFormComponent } from './goods-form/goods-form.component';
import { GoodsQualityInspectionComponent } from './goods-quality-inspection/goods-quality-inspection.component';
import { ScrollGridComponent } from './scroll-grid/scroll-grid.component';

export const routes: Routes = [
  { path: '', redirectTo: '/scroll', pathMatch: 'full' },
  { path: 'address-form', component: AddressFormComponent },
  { path: 'goods-form', component: GoodsFormComponent },
  {
    path: 'goods-quality-inspection',
    component: GoodsQualityInspectionComponent,
  },
  // {
  //   path: 'scroll',
  //   component: ScrollGridComponent,
  // },
];
