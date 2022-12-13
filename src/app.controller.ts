import { Controller, Get, Post, Options } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';
const OptionsList={
  'GET':{
    '/notifications':' Pega todoas as notificações existentes na tabela'
  },
  'OPTIONS':{
    '/notifications': 'Oi bb, vem sempre aqui? Brincadeira. É o que você acabou de usar pra acessar isso'
  }
}
@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notifications.findMany();
  }
  @Post()
  async create(){
    await this.prisma.notifications.create({
      data:{
        id: randomUUID(),
        content: 'Você tem uma nova solicitação de amizade!',
        category: 'Social',
        recipientId: randomUUID(),
      }
    })
  }
  @Options()
  optionsComands(){
    return OptionsList
  }
}
