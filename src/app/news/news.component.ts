import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

interface NewsItem {
  titulo: string;
  contenido: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: { titulo: string; contenido: string }[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.news = this.newsService.getNews();
  }

  readMore(item: NewsItem) {
    alert(`Leyendo más sobre: ${item.titulo}`);
  }
  

}
