import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

  contacts = "";
  index=0;
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.getContacts()
  }

  getContacts(){
    console.log("started")
    this.contactService.getContacts().subscribe(response=>{
      console.log(response)
      if (response['status'] == 'success') {
        this.contacts = response['data']
      } else{
        console.log(response)
      }
    })
    }

}