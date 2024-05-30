import { OnInit, OnDestroy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as XLSX from 'xlsx';

@Component({
  template: '',
})
export class BaseComponent implements OnInit, OnDestroy {
  keysTable: any;
  valuesTable: any;
  tables: any = [];

  formLabelMapInput = {};

  formGroupName!: FormGroup;

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.getFormLabelMapInput();
    this.keysTable = Object.keys(this.formLabelMapInput);
    this.valuesTable = Object.values(this.formLabelMapInput);
  }

  ngOnDestroy(): void {
    console.log('BaseComponent ngOnDestroy');
  }

  export(): void {
    this.exportToExcel(this.tables);
  }

  save() {
    const formData = this.formGroupName.value;
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
    XLSX.writeFile(workbook, this.getFileNameExport());
  }

  getFormLabelMapInput() {}

  getFileNameExport(): string {
    return '';
  }
}
