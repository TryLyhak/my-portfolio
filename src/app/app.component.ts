import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { JourneyComponent } from './journey/journey.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent, Project } from './projects/projects.component';
import { SkillsComponent, SkillGroup } from './skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeroComponent,
    JourneyComponent,
    NavbarComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  currentYear = new Date().getFullYear();

  projects: Project[] = [
    {
      number: '01',
      name: 'Lumina Library',
      category: 'Full-stack web application · Academic project',
      description: 'A library management system concept focused on organizing books and library workflows. The project uses a Laravel backend with a PHP-based interface and a MySQL database.',
      stack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
      accent: 'violet',
      icon: '▤'
    },
    {
      number: '02',
      name: 'Student Management System API',
      category: 'Backend development · Academic project',
      description: 'A Laravel REST API practice project for managing student records, with relational database structure and endpoints for retrieving student data.',
      stack: ['Laravel 13', 'PHP 8.3', 'MySQL'],
      accent: 'blue',
      icon: '{ }'
    },
    {
      number: '03',
      name: 'Scott Shop',
      category: 'Frontend development · Personal project',
      description: 'An Angular shopping interface with product browsing and a cart experience. Cart data is stored locally in the browser.',
      stack: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      accent: 'orange',
      icon: '◈',
      url: 'https://scott-shop.vercel.app/'
    },
    {
      number: '04',
      name: 'POS Management App',
      category: 'Mobile application · Practice project',
      description: 'A point-of-sale application concept with role-based user flows for sales and administration, connected to a PHP and MySQL backend.',
      stack: ['Flutter', 'Dart', 'PHP', 'MySQL'],
      accent: 'green',
      icon: '▦'
    },
    {
      number: '05',
      name: 'Product & Category CRUD',
      category: 'Web development · Academic project',
      description: 'A simple product and category management application demonstrating create, read, update and delete workflows with a MySQL database.',
      stack: ['PHP', 'MySQL', 'JavaScript', 'SweetAlert2'],
      accent: 'pink',
      icon: '⌘'
    }
  ];

  skills: SkillGroup[] = [
    { title: 'Frontend', symbol: '◫', items: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'TypeScript', 'Angular'] },
    { title: 'Backend & database', symbol: '{ }', items: ['PHP', 'Laravel', 'Node.js basics', 'MySQL', 'PostgreSQL', 'MongoDB'] },
    { title: 'Tools & workflow', symbol: '⌘', items: ['Git', 'GitHub', 'Postman', 'Swagger','VS Code', 'Figma'] },
    { title: 'Quality mindset', symbol: '✓', items: ['Manual testing fundamentals', 'Test case thinking', 'Bug reporting', 'API checking'] }
  ];
}
