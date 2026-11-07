import { AfterViewInit, Component } from '@angular/core';
import { AtSign, Camera, createIcons, Mail, MapPin, Phone, Send, Users } from 'lucide';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html'
})
export class ContactComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    createIcons({
      icons: { AtSign, Camera, Mail, MapPin, Phone, Send, Users }
    });
  }
}
