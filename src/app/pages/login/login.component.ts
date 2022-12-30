import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service: LoginService,private router: Router) { }

  ngOnInit(): void {
  }

autentificar(){
  
if( this.service.usuarioModel.usuario=='' || this.service.usuarioModel.password=='' ){
  Swal.fire({
    icon: 'warning',
    title: '',
    text: 'Debe ingresar sus credenciales'
  })
}else{
  this.router.navigateByUrl('/principal');
}

}



}
