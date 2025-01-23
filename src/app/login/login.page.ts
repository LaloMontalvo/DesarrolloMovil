import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

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

  login(form: NgForm){
    //obtenemos los valores del  formulario
    console.log(form.value);

    //valida formulario
    console.log('valid',form.valid)

    // si form es invalido
   // console.log('Todos los camopos son requeridos)
   //return

   if(form.invalid){
    console.log('Todos los campos son requeridos')
    return;
   }

    if(this.email === 'admin' 
      && this.password ==='admin'){
      console.log('Login correcto');
    }
    else{
      console.log('Login incorrecto');
    }
  }


    

}
