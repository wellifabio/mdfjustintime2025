# MDF - Justi in time
MDF (Modular Development Framework) Just in time (Estoque Mínimo) é uma ferramenta desenvolvida para auxiliar na gestão de estoques de pequenas fábricas de produtos manufaturados. O objetivo principal do MDF Just in time é otimizar o processo de produção, garantindo que os materiais necessários estejam disponíveis no momento certo, evitando excessos de estoque e reduzindo custos operacionais.

## Distribuição de pastas
```
./api - Backend (Node.js, Express.js, Prisma)
./web - Frontend (HTML, CSS, JavaScript)
./docs - Documentação e diagramas
**/README.md - Documentação do projeto
```
## Instruções para executar o projeto localmente
- 1 Clone o repositório do projeto:
```bash
git clone <URL_DO_REPOSITORIO>
```
- 2 Navegue até o diretório do backend e instale as dependências:
```bash
cd api
npm install
```
- 3 Configure o banco de dados:
  - Certifique-se de que o XAMPP está instalado e em execução.
  - Abra o XAMPP Control Panel e inicie o serviço MySQL.
  - Atualize o arquivo `.env` na pasta `api` com as credenciais do banco de dados.
  ```env
  DATABASE_URL="mysql://root@localhost:3306/preparacao_db"
  ```
  - Execute as migrações do Prisma para criar as tabelas no banco de dados:
  ```bash
  npx prisma migrate dev --name init
  ```
- 4 Inicie o servidor backend:
```bash
npm run dev
## ou
npm start
```
- 5 Abra o frontend:
- Navegue até a pasta `web` e abra o arquivo `index.html` em seu navegador, ou com o Live Server do VSCode.

## Entregas:
---
### [Lista de Requisitos Funcionais](./docs/Requisitos_funcionais.md)
---
### Diagrama entidade relacionamento DER
![MER x DER](./docs/der.png)
### Script de criação e população do banco de dados
  - [Script de Criaçã - prisma/schema.prisma](./api/prisma/schema.prisma)
  - [Script de população - prisma/seed.js](./api/prisma/seed.js)
---
### Interface de autenticação de usuários (login)
![Screenshot 1](./docs/screenshot01.png)
---
### Interface principal do sistema
![Screenshot 2](./docs/screenshot02.png)
---
### Interface cadastro de produtos
![Screenshot 3](./docs/screenshot03.png)
![Screenshot 4](./docs/screenshot04.png)
---
### Interface gestão de produção (Just in time)
![Screenshot 5](./docs/screenshot05.png)
![Screenshot 6](./docs/screenshot06.png)
---
### [Descritivo de Casos de Teste de Software](./docs/casos_de_teste.md)
---
## Lista de requisitos de infraestrutura
- Ambiente de desenvolvimento:
  - Node.js (versão 14 ou superior, JavaScript)
  - Prisma ORM (versão 4.0 ou superior)
  - Express.js (versão 4.0 ou superior)
  - XAMPP (MySQL) (Server version: 10.4.32-MariaDB)
  - HTML5, CSS3, JavaScript
- Sistema Operacional:
  - Windows 10 ou superior / Linux / MacOS








