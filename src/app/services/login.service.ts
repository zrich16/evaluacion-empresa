import { Injectable } from '@angular/core';
import { UsuarioModel } from '../model/usuariomodel';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

   usuarioModel = new UsuarioModel();

  constructor() { }
}
