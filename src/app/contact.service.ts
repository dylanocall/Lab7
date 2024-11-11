import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  getContactInfo() {
    return { email: 'Dylan@gmail.com', phone: '123-456-7890' };
  }
}
