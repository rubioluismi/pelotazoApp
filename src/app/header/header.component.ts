import { Component, OnInit } from '@angular/core';
import { Usuario } from './../modelo/usuario';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public usuario: Usuario;
  public nick: String;
  public loginOut: boolean;

  constructor() { }

  ngOnInit() {
    this.getUsuario();
    this.loginOut = false;
  }

  getUsuario() {
      this.usuario = new Usuario(1, 'LuisMi', 'Luis Miguel', '123', 'Rubio');
      this.nick = 'LuisMi';
  }

  enviar() {
    this.nick = null;
    this.loginOut = false;
  }

  enviarNick(nick) {
    this.nick = 'LuisMi';
    this.loginOut = true;
  }

}
