import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Background, Race } from '../../character.models';

@Component({
  selector: 'de-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {
  basicsForm: FormGroup;
  racesOptions: { value: Race; label: string }[] = [
    { value: 'human', label: 'Human' },
    { value: 'elf', label: 'Elf' },
    { value: 'dwarf', label: 'Dwarf' },
    { value: 'halfling', label: 'Halfling' }
  ];

  backgroundOptions: { value: Background; label: string }[] = [
    { value: 'military', label: 'Military' },
    { value: 'bourgeois', label: 'Bourgeois' },
    { value: 'wanderer', label: 'Wanderer / Rural' },
    { value: 'urban', label: 'Urban / Mercantile' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.setupForm();
  }

  private setupForm() {
    this.basicsForm = this.fb.group({
      race: [],
      background: []
    });
  }
}
