import { Component, input } from '@angular/core';

export type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  accent: string;
  icon: string;
  url?: string;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects = input.required<Project[]>();
}
