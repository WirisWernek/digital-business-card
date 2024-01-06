import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmailModel } from '../models/Email.model';
import { AnotacaoService } from './anotacao.service';
import { EmailRapidoService } from './email-rapido.service';

@Injectable({
	providedIn: 'root',
})
export class EmailService {
	private base_url: string;

	constructor(
		private http: HttpClient,
		private anotacaoService: AnotacaoService,
		private emailRapidoService: EmailRapidoService
	) {
		this.base_url = environment.API_URL;
	}

	sendEmailRapido(email: EmailModel) {
		const emaiRapido = this.generateConteudoEmailRapido(email);
		this.emailRapidoService.salvar(emaiRapido);
		this.send(emaiRapido);
	}

	sendNote(email: EmailModel) {
		const nota = this.generateConteudoNote(email);
		this.anotacaoService.salvar(nota);
		this.send(nota);
	}

	private send(email: EmailModel) {
		this.http.post(this.base_url + '/email', email).subscribe((retorno) => {
			return retorno;
		});
	}

	private generateConteudoNote(email: EmailModel) {
		email.titulo = email.assunto;
		email.agradecimento = 'Agradecemos seu interesse em nossos serviços!';
		email.assunto = 'Nota By Digital Business Card';
		return email;
	}

	private generateConteudoEmailRapido(email: EmailModel) {
		email.titulo = email.assunto;
		email.agradecimento = 'Aguardamos ansiosos por vosso retorno!';
		email.assunto = 'Contato By Digital Business Card';
		return email;
	}
}
