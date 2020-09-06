import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formapp';
   numbersearch(){
    document.getElementById("searchbynumber").style.visibility = "visible";
    document.getElementById("searchbyemail").style.visibility = "hidden";
  }
  emailsearch(){
    document.getElementById("searchbyemail").style.visibility = "visible";
    document.getElementById("searchbynumber").style.visibility = "hidden";
  }
  onsubmit(data){
    fetch('http://localhost:3000/data', {
    method: 'POST',
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.number

    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
  alert('data submitted successfully to db.json')
  }
}
