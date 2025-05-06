import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contactForm: FormGroup;
  submitted = false;
  success = false;
  error = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.error = false;
    if (this.contactForm.invalid) {
      return;
    }
    const formspreeEndpoint = 'https://formspree.io/f/manooael';
    this.http.post(formspreeEndpoint, {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
      _subject: 'New Contact Form Submission'
    }).subscribe({
      next: () => {
        this.success = true;
        this.contactForm.reset();
        this.submitted = false;
        setTimeout(() => this.success = false, 5000);
      },
      error: (err) => {
        this.error = true;
        if (err.error?.errors?.[0]?.code === 'FORM_NOT_FOUND') {
          this.errorMessage = 'Form not configured properly. Please contact site owner.';
        } else {
          this.errorMessage = 'Error sending message. Please try again later.';
        }
      }
    });
  }
}
