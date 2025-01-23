import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  email : string = 'lalo@gmail.com';
  password: string = '';

  constructor() { }

  ngOnInit() {
  }

  login(){
    //si usuario = admin y password = admin
    //entonces console.log('Login correcto')
    //si no console.log('login incorrecro')

    if(this.email === 'admin' 
      && this.password ==='admin'){
      console.log('Login correcto');
    }
    else{
      console.log('Login incorrecto');
    }
  }


    

}
