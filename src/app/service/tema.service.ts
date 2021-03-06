import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http:HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }


  getAllTemas(): Observable<Tema[]> {
    return this.http.get<Tema[]>('https://blogpessoalarcangeloar.herokuapp.com/tema', this.token)
  }

  getByIdTema(id: number): Observable<Tema> {
    return this.http.get<Tema>(`https://blogpessoalarcangeloar.herokuapp.com/tema/${id}`, this.token)
  }

  getByDescricaoTema(descricao: string): Observable<Tema[]> {
    return this.http.get<Tema[]>(`https://blogpessoalarcangeloar.herokuapp.com/tema/descricao/${descricao}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>('https://blogpessoalarcangeloar.herokuapp.com/tema', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>('https://blogpessoalarcangeloar.herokuapp.com/tema', tema, this.token)
  }

  deleteTema(id: number) {
    console.log(this.token)
    return this.http.delete(`https://blogpessoalarcangeloar.herokuapp.com/tema/${id}`, this.token)
  }

}
