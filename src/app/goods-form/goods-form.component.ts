import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BaseComponent } from '../../share/base-component';

@Component({
  selector: 'app-goods-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './goods-form.component.html',
  styleUrl: './goods-form.component.scss',
})
export class GoodsFormComponent extends BaseComponent {
  constructor(override fb: FormBuilder) {
    super(fb);
    this.formGroupName = this.fb.group({
      goodsname: [''],
      producer: [''],
      produceraddress: [''],
      importer: [''],
      importeraddress: [''],
      ingredient: [''],
      specifications: [''],
      usermanual: [''],
      safetywarning: [''],
      yearofmanufacture: [''],
    });
  }

  override getFormLabelMapInput() {
    this.formLabelMapInput = {
      goodsname: 'Tên hàng',
      producer: 'Nhà sản xuất',
      produceraddress: 'Địa chỉ',
      importer: 'Nhà nhập khẩu',
      importeraddress: 'Địa chỉ',
      ingredient: 'Thành phần',
      specifications: 'Thông số kỹ thuật',
      usermanual: 'Hướng dẫn sử dụng',
      safetywarning: 'Cảnh báo an toàn',
      yearofmanufacture: 'Năm sản xuất',
    };
  }

  override getFileNameExport() {
    return 'Goods.xlsx';
  }
}
