import { Injectable } from '@angular/core';
import { LinkModel } from '../models/Link.model';

@Injectable({
  providedIn: 'root',
})
export class ListProjectsLinksService {
  constructor() {}

  getAllLinks() {
    const listLinks = new Array<LinkModel>();
    listLinks.push(
      new LinkModel().build(
        'https://wiriswernek.vercel.app', 
        'Portfólio', 
        ['col-11','button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://digital-card.wiriswernek.vercel.app',
        'Cartão de Visitas Digital',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://previsao-tempo.wiriswernek.vercel.app',
        'Previsão do Tempo',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://github-consumer.wiriswernek.vercel.app',
        'GitHub Consumer',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://finance.wiriswernek.vercel.app',
        'Finance',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://gerador-de-senhas.wiriswernek.vercel.app',
        'Gerador de Senhas',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://projeto-hotel-paraiso.wiriswernek.vercel.app',
        'Projeto Hotel Paraíso',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://projeto-anna-bella.wiriswernek.vercel.app',
        'Projeto Anna Bella',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://unes.wiriswernek.vercel.app',
        'Projeto UNES',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://instagram-clone.wiriswernek.vercel.app',
        'Instagram Login Clone',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://netflix-clone.wiriswernek.vercel.app',
        'Netflix Clone',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://snake-game.wiriswernek.vercel.app',
        'Snake Game',
        ['col-11', 'button']
      )
    );
    listLinks.push(
      new LinkModel().build(
        'https://jogo-da-velha.wiriswernek.vercel.app',
        'Jogo da Velha',
        ['col-11', 'button']
      )
    );
    return listLinks;
  }
}
