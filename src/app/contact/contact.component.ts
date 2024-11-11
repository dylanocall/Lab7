import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactInfo: { email: string; phone: string } = { email: '', phone: '' }; 

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactInfo = this.contactService.getContactInfo();
  }
}
