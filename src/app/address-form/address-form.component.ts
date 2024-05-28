import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss',
})
export class AddressFormComponent {
  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
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

  formLabelMapInput = {
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

  ngOnInit(): void {}

  onSubmit(): void {
    const formData = this.addressForm.value;
    this.exportToExcel(formData);
  }

  exportToExcel(data: any): void {
    console.log(data);
    const formExport = [];
    for (const key in data) {
      const fieldName =
        this.formLabelMapInput[key as keyof typeof this.formLabelMapInput];
      formExport.push([fieldName, data[key]]);
    }

    const worksheet = XLSX.utils.aoa_to_sheet(formExport);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, 'AddressData.xlsx');
  }
}
