import { Component, OnInit, Input } from '@angular/core';
import { Email } from 'src/components/email-form/EmailModel';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  emailForm: FormGroup;
  EMAIL_SERVER = "https://mailthis.to/gsoccerm@gmail.com";
  emailModel = new Email('', '', '', '', 'Turf Doctor Email Form', 'http://localhost:4200/confirmation', '');
  @Input() formStyle: string;
  ngOnInit() {
  }
}
