import { CommonModule } from '@angular/common';
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
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
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

  keysTable: any;
  valuesTable: any;

  tables: any = [];

  ngOnInit(): void {
    this.keysTable = Object.keys(this.formLabelMapInput);
    this.valuesTable = Object.values(this.formLabelMapInput);
  }

  export(): void {
    this.exportToExcel(this.tables);
  }

  save() {
    const formData = this.addressForm.value;
    this.tables.push(formData);
  }

  exportToExcel(data: any): void {
    console.log(data);
    const formExport = [];
    for (const item of data) {
      for (const key in item) {
        const fieldName =
          this.formLabelMapInput[key as keyof typeof this.formLabelMapInput];
        formExport.push([fieldName, item[key]]);
      }
    }

    const worksheet = XLSX.utils.aoa_to_sheet(formExport);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, 'AddressData.xlsx');
  }
}
