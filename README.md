# Projeto Gerador de FakeUser
O projeto consiste em usar uma API pública para geração de usuário fictício com informações como: nome, email, imagem, estado, país, entre outras.
## Design do projeto
![alt text](image.png)
=======
![alt text](image-1.png)


## API Utilizada
A API utilizada foi a https://randomouser.me/ que fornece informações de usuário através de um JSON conforme abaixo:

```
"resultados": [
    {
      "Sexo: Feminino ",
      "nome": {
        "título": " Senhorita ",
        "primeiro": " Jennie ",
        "último": " Nichols "
      },
      "localização": {
        "rua": {
          "número": 8929 ,
          "nome": " Valwood Pkwy ",
        },
        "cidade": " Billings ",
        "estado": " Michigan ",
        "país": " Estados Unidos ",
        "código postal": " 63104 ",
        "coordenadas": {
          "latitude": " -69.8246 ",
          "longitude": " 134.8719 "
        },
        "fuso horário": {
          "deslocamento": " +9:30 ",
          "descrição": " Adelaide, Darwin "
        }
      },
      "e-mail": " jennie.nichols@example.com ",
      "Conecte-se": {
        "uuid": " 7a0eed16-9430-4d68-901f-c0d4c1c3bf00 ",
        "nome de usuário": " yellowpeacock117 ",
        "senha": " addison ",
        "sal": " sld1yGtd ",
        "md5": " ab54ac4c0be9480ae8fa5e9e2a5196a3 ",
        "sha1": " edcf2ce613cbdea349133c52dc2f3b83168dc51b ",
        "sha256": " 48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d "
      },
      "sobrenome": {
        "data": " 1992-03-08T15:13:16.688Z ",
        "idade": 30
      },
      "registrado": {
        "data": " 2007-07-09T05:51:59.390Z ",
        "idade": 14
      },
      "telefone": " (272) 790-0888 ",
      "célula": " (489) 330-2385 ",
      "eu ia": {
        "nome": " SSN ",
        "valor": " 405-88-3636 "
      },
      "foto": {
        "grande": " https://randomuser.me/api/portraits/men/75.jpg ",
        "médio": " https://randomuser.me/api/portraits/med/men/75.jpg ",
        "miniatura": " https://randomuser.me/api/portraits/thumb/men/75.jpg "
      },
      "nat": " EUA "
    }
  ]

```

## Funcionalidades

- [x] Filtro de usuários pelo gênero
- [x] Filtro de usuários pela nacionalidade
- [x] Filtro de usuários pela quantidade
- [ ] Responsividade
- [x] Aumentar o filtro de quantidade de usuários
- [x] Colocar mais opções de país

## Contatos
ana.paula.silva06@aluno.ifce.edu.br
