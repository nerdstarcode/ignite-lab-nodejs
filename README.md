
# Ignite Lab NodeJS

Bora que foguete não tem ré! #neverstoplearning
Bora codar.
- NodeJS
- NestJS
- Prisma
- Jest
- Insomnia
## Primeiro dia
O que é um microsserviço?
    
- São serviços pequenos que se complementam;
- São serviços específicos e modulares;
- Serviços independentes.
Ter microsserviços também implica em um banco de dados mais modular, 
alguns problemas que surgem são as comunicações entre diferentes bancos
de dados, como resolver? Duplicidade de dados é uma forma, usando mensagerias 
podemos passar através dessas mensagerias os dados entre um ou mais
bancos de outros microsserviços.

### Nestjs
- Framework opinado;
    
    Framework que tem uma estrutura prévia, ele opina para padronização do código
- Integrações;

    Para integrar com outras libs que o Nest não engloba pode gerar problemas, mas
    ele trás velocidade e produtividade por limitar as tomadas de decições, há menos
    atritos na escolha das tecnologias.
    Claro, há tecnologias muito boas já prontas dentro do Nest.
- TypeScript e Decorators.

## Criando o projeto
### [Instalando dependências do Nestjs](https://docs.nestjs.com/first-steps)
Instalando o nest cli.
```bash
npm i -g @nestjs/cli
```
Criando a estrutura do projeto.
```bash
nest new project-name
```
Iniciando o projeto
```bash
npm run start:dev  
```
Decorators: @DecoratorName
- controller

    Define rotas
- service

    Repositórios, 

Inversão de dependências: 

    Ao invés do app controller buscar a dependencia 
    em outro arquivo, ele recebe uma funcionalidade 
    ele recebe a funcinalidade quando é instânciado
Injeção de dependências:

    O Nest consegue entender dependências quando são
    postas na intânciação delas, ao fazer declarar uma
    dependência em uma instância, dentro do module ele
    define que tem aquela dependência.
### [Prisma](https://www.prisma.io/docs/getting-started)
Instalando cli prisma como dependência de desenvolvimento
```bash
npm i prisma -D
```
Instalando a parte que vai ser usada para nos conectarmos no banco de dados
```bash
npm i @prisma/client
```
Iniciando estrutura do prisma com uma flag para rodar com SQLite.

```bash
npx prisma init --datasource-provider SQLite
```
O Nest consegue usar outros bancos SQL mais conhecidos.

Criando uma tabela de para as notificações, o recipientId
é uma "chave estrangeira" a forma do prisma lidar com isso 
é esse `@@index([recipientId])` (Isso ajuda para buscar o id do usuário em outra tabela)
```prisma
model Notifications {
  id          String    @id
  recipientId String
  content     String
  category    String
  readtedAt   DateTime?
  createdAt   DateTime  @default(now())

  @@index([recipientId])
}

```

Para efetivamente criar a tabela no banco precisamos
executar:
```bash
npx prisma migrate dev
```
Ai sim ele vai fazer a migração do código que escrevemos
para o banco e criar a tabela.
Para visualizar o banco podemos executar
```bash
npx prisma studio
```
Que vai abrir no navegador uma interface para visualizar o banco

[Prisma na documentação do Nest](https://docs.nestjs.com/recipes/prisma#prisma)

### [Insomnia](https://insomnia.rest)
É só instalar mesmo e é isso kk.

### Nest
Agora novamente no Nest, vamos instalar outras libs nele
```bash
npm i class-validator class-transformer
```
## Segundo dia

### Design de software

- Arquitetar como as coisas vão funcionar;
- Regras de negócios;
- Casos de uso.

DDD - domain driven design?

-  Quais são os requisitos funcionais?
- Quais são os requisitos não funcionais?
- Quais são as regras de negócios?

Pensar na aplicação desconexa de qualquer meio externo.

#### Pastas
- infra

    Tudo que é externo, tudo que tem relação com a 
    camada externa
    - Banco de Dados;
    - Conexão com outras apis;
    - Http...
    Tudo que dá acesso ao mundo exterior da aplicação.
- applications

    Todo o restante da aplicação que não vai na infra
    tudo que é independente da camada externa
Value Object:
    um pequeno objeto que representa uma entidade simples cuja igualdade não é baseada em identidade: ou seja, dois objetos de valor são iguais quando têm o mesmo valor, não sendo necessariamente o mesmo objeto.

Casos de uso: 
    Como o usuário interage com a aplicação, funcionalidades 
    da aplicação.

Repository Patern:

    Intermédio entre nossa aplicação e camada de persistência.
    O que fazem a comunicação entre a aplicação e a camada de persistência

Banco de dados em memória:

    É esse array ai anterioir, assim que a aplicação reiniciar esses dados morrem,
    dai no caso é só transportar como fizemos para um arquivo ao invés
    de ficar lá dentro
## Terceiro dia

### Mappers
Servem pra ajudar nas diferentes representações necessárias na apresentação de uma mesma entidade.
