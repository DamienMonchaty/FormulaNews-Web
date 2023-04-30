import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  FormData: FormGroup;

  ngOnInit() {
    this.FormData = this.builder.group({
      Opts: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Message: new FormControl('', [Validators.required])
    })
  }

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  onSubmit(FormData) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
}
