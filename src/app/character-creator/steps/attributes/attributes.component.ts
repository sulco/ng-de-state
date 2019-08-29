import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { attributes } from './attributes';

@Component({
  selector: 'de-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {
  attributesForm: FormGroup;
  attributes = attributes;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.setupForm();
  }

  private setupForm() {
    this.attributesForm = this.fb.group(this.buildAttributes());
  }

  private buildAttributes() {
    return this.attributes.reduce((acc, attr) => ({ ...acc, [attr]: [] }), {});
  }
}
