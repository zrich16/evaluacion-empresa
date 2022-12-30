import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/model/usuariomodel';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {


opcion: number=0;
ordenVerificacion: string='';
idVerificador: string='';
mes: number=0;

banderaDatosOrden: boolean=false;

  constructor(public service: LoginService,private router: Router) { }

  ngOnInit(): void {
    this.banderaDatosOrden = false;
  }

  terminarSession(){
    this.service.usuarioModel = new UsuarioModel();
    this.router.navigateByUrl('/login');
  }


  buscar(){


  }

  limpiar(){

  }
}
