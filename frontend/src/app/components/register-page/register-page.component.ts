import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    firstName: null,
    lastName: null
  };

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void { }

  onSubmit(): void {
    this.http.post('https://localhost:7015/api/Login/register', this.form, { responseType: 'text' })
      .subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: (err) => console.error(err)
      });
  }
}