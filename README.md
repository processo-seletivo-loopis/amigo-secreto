<p align="center">
  <img height=200 src="https://loopisjr.github.io/images/png.png">
</p><br>

Repositório do website "Amigo Secreto" desenvolvido como teste de admissão 
para o processo seletivo da Loopis, empresa JR do IFPB - Campus Cajazeiras

# Contribuindo

- Faça um clone do repositório ```$ git clone https://github.com/processo-seletivo-loopis/amigo-secreto.git```
- Crie uma nova branch para a sua feature ```$ git checkout -b feature/sua-feature```
- Faça as alterações e dê push ```$ git push origin feature/sua-feature```
- Abra um pull-request para adicionar suas mudanças na branch master

# Rodando o Projeto

- Faça um clone do repositório ```$ git clone https://github.com/processo-seletivo-loopis/amigo-secreto.git```

```
BackEnd
```
- Adentre o backend ```$ cd backend```
- Performe os seguintes comandos: ```$ python manage.py makemigrations django_app && python manage.py migrate```
- Inicialize o servidor da API: ```$ python manage.py runserver```

```
FrontEnd
```
- Adentre o frontend ```$ cd frontend```
- Performe os seguintes comandos: ```$ npm install && npm audit fix```
- Inicialize o servidor do FrontEnd: ```$ npm start```
- Acesse: "localhost:3000" pra visualizar o projeto funcionando.
