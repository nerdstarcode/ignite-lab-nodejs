import { Controller, Post, Options, Body } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModel } from '../view-models/notification-view-module';
const OptionsList = {
  'GET': {
    '/notifications': ' Pega todo as as notificações existentes na tabela'
  },
  'POST': {
    '/notifications': ' Cria notificações'
  },
  'OPTIONS': {
    '/notifications': 'Oi bb, vem sempre aqui? Brincadeira. É o que você acabou de usar pra acessar isso'
  }
}
@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) { }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category
    });
    return { 
      notification : NotificationViewModel.toHTTP(notification)
    }
  }
  @Options()
  optionsComands() {
    return OptionsList
  }
}
