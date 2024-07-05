import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  contactFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  @ViewChild('.form') ngForm: any;

  ngOnInit(): void {
    console.log(this.ngForm);
  }

  public submitForm(e: SubmitEvent) {
    const form = e.target as HTMLFormElement;
    if (form.reportValidity()) {
      const formData = new FormData();
      formData.append('name', this.contactFormData.name);
      formData.append('email', this.contactFormData.email);
      formData.append('message', this.contactFormData.message);
      formData.append('subject', this.contactFormData.subject);
      formData.append('_captcha', 'false');

      this.http.post(form.action, formData).subscribe()
    
    console.log(e)
    }
    
  }
}
