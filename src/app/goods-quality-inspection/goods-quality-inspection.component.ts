import { Component } from '@angular/core';
import { BaseComponent } from '../../share/base-component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goods-quality-inspection',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './goods-quality-inspection.component.html',
  styleUrl: './goods-quality-inspection.component.scss',
})
export class GoodsQualityInspectionComponent extends BaseComponent {
  constructor(override fb: FormBuilder) {
    super(fb);
    this.formGroupName = this.fb.group({
      productgroup: [''],
      hscode: [''],
      productname: [''],
      typesymbol: [''],
      specifications: [''],
      countryofmanufacture: [''],
      producer: [''],
      quantity: [''],
      unit: [''],
    });
  }

  override getFormLabelMapInput() {
    this.formLabelMapInput = {
      productgroup: 'Nhóm hàng hóa',
      hscode: 'Mã HS',
      productname: 'Tên hàng hóa',
      typesymbol: 'Ký hiệu kiểu loại',
      specifications: 'Thông số kỹ thuật',
      countryofmanufacture: 'Xuất xứ, nước sản xuất',
      producer: 'Nhà sản xuất',
      quantity: 'Số lượng',
      unit: 'Đơn vị',
    };
  }

  override getFileNameExport() {
    return 'GoodsQualityInspection.xlsx';
  }
}
