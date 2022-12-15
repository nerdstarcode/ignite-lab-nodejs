import { Injectable } from "@nestjs/common";
import { Notification } from "@application/entities/notification/notification";
import { NotificationsRepository } from "@application/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";
import { PrismaNotificationMapper } from "../mappers/prisma-notification-mapper";
@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository{
    constructor( private prisma: PrismaService ) {}

    async create(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notification);

        await this.prisma.notifications.create({
            data: raw,
        });
    }

}