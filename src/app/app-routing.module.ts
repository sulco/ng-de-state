import { CharacterCreatorComponent } from './character-creator/character-creator.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicsComponent } from './character-creator/steps/basics/basics.component';
import { AttributesComponent } from './character-creator/steps/attributes/attributes.component';
import { SkillsComponent } from './character-creator/steps/skills/skills.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterCreatorComponent,
    children: [
      { path: '', component: BasicsComponent },
      { path: 'attributes', component: AttributesComponent },
      { path: 'skills', component: SkillsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
