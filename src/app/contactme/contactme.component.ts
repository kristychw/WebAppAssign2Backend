import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent {
  constructor(private router: Router) {}

  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    contactNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  onSubmitBtn() {
    if (this.contactForm.valid) {
      console.warn(this.contactForm.value);

      // Navigate to the '/home' route after form submission
      this.router.navigate(['/home']);
    }
  }
}
