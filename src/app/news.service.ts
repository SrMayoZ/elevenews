import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  // Ejemplo de cómo podrían verse tus noticias
  news = [
    {titulo: 'Ataque de Ransomware paraliza empresa', contenido: 'Detalle de la noticia...'},
    {titulo: 'Cómo mantener tu información segura', contenido: 'Detalle de la noticia...'},
    // Agrega más noticias aquí
  ];

  constructor() { }

  getNews() {
    return this.news;
  }
}
