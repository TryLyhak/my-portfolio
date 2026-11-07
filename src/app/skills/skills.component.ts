import { Component, input } from '@angular/core';

export type SkillGroup = {
  title: string;
  symbol: string;
  items: string[];
};

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  skills = input.required<SkillGroup[]>();
}
