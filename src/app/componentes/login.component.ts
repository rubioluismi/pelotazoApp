import { Usuario } from './../modelo/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: '../vista/login.component.html',
    styleUrls: ['../../assets/css/app.component.css']
  })

  export class LoginComponent implements OnInit {

    public usuario: Usuario;

    ngOnInit() {
        this.usuario.nick = 'LuisMi';
    }
  }
