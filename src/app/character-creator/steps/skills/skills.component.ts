import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Skills } from '../../character.models';

@Component({
  selector: 'de-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.setupForm();
  }

  get skillControls() {
    return (this.skillsForm.get('skills') as FormArray).controls;
  }

  private setupForm() {
    this.skillsForm = this.fb.group({ skills: this.buildSkills([]) });
  }

  private buildSkills(skills: Skills) {
    return this.fb.array(skills.map(() => this.fb.control(false)));
  }
}
