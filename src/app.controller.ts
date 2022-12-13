import { Controller, Get, Post, Options } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';
import { Body } from '@nestjs/common/decorators';
import { CreateNotificationBody } from './create-notification-body';
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
  async create(@Body() body: CreateNotificationBody){
    const {recipientId, content, category} = body
    await this.prisma.notifications.create({
      data:{
        id: randomUUID(),
        content,
        category,
        recipientId,
      }
    })
  }
  @Options()
  optionsComands(){
    return OptionsList
  }
}
