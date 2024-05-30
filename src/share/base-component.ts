import { OnInit, OnDestroy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as XLSX from 'xlsx';
import { LocalStorageService } from './service/local-storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: '',
})
export class BaseComponent implements OnInit, OnDestroy {
  keysTable: any;
  valuesTable: any;
  tables: any = [];

  formLabelMapInput = {};

  formGroupName!: FormGroup;

  activatedRoute = inject(ActivatedRoute);
  currentUrl = '';

  constructor(
    protected fb: FormBuilder,
    protected localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getFormLabelMapInput();
    this.keysTable = Object.keys(this.formLabelMapInput);
    this.valuesTable = Object.values(this.formLabelMapInput);
    this.currentUrl = this.activatedRoute.snapshot.url[0].path;

    const tablesFromStorage = this.localStorageService.getItem(this.currentUrl);
    if (tablesFromStorage) {
      this.tables = tablesFromStorage;
    }
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
    this.localStorageService.setItem(this.currentUrl, this.tables);
  }

  remove() {
    this.tables = [];
    this.localStorageService.removeItem(this.currentUrl);
  }

  exportToExcel(data: any): void {
    console.log(data);

    const worksheet = this.customWorkSheet(data);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, this.getFileNameExport());
  }

  customWorkSheet(data: any): XLSX.WorkSheet {
    const formExport = [];
    for (const item of data) {
      for (const key in item) {
        const fieldName =
          this.formLabelMapInput[key as keyof typeof this.formLabelMapInput];
        formExport.push([fieldName, item[key]]);
      }
    }
    return XLSX.utils.aoa_to_sheet(formExport);
  }

  getFormLabelMapInput() {}

  getFileNameExport(): string {
    return '';
  }
}
