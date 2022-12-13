
# Ignite Lab NodeJS

Bora que foguete não tem ré! #neverstoplearning
Bora codar.
- NodeJS
- NestJS
- Prisma
- Jest
- 
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
