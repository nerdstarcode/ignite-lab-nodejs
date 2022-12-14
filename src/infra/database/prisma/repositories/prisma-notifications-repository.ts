import { Injectable } from "@nestjs/common";
import { Notification } from "../../../../application/entities/notification/notification";
import { NotificationsRepository } from "../../../../application/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";
@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository{
    constructor( private prisma: PrismaService ) {}

    async create(notification: Notification): Promise<void> {
        await this.prisma.notifications.create({
            data:{
                id: notification.id,
                content: notification.content.value,
                category: notification.category,
                recipientId: notification.recipientId,
                readtedAt:notification.readAt,
                createdAt: notification.createdAt,
            }
        });
    }

}