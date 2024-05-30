import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from '../../share/base-component';
import { LocalStorageService } from '../../share/service/local-storage.service';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss',
})
export class AddressFormComponent extends BaseComponent {
  constructor(
    override fb: FormBuilder,
    override localStorageService: LocalStorageService
  ) {
    super(fb, localStorageService);
    this.formGroupName = this.fb.group({
      itemno: [''],
      productname: [''],
      shipper: [''],
      shipperaddress: [''],
      consignee: [''],
      consigneeaddress: [''],
      origin: [''],
      qty_pkg: [''],
      g_w: [''],
      pkgsize: [''],
    });
  }

  override getFormLabelMapInput() {
    this.formLabelMapInput = {
      itemno: 'Item No',
      productname: 'Product Name',
      shipper: 'Shipper',
      shipperaddress: 'Address',
      consignee: 'Consignee',
      consigneeaddress: 'Address',
      origin: 'Origin',
      qty_pkg: 'QTY/PKG',
      g_w: 'G/W',
      pkgsize: 'PKG Size',
    };
  }

  override getFileNameExport() {
    return 'Address.xlsx';
  }
}
