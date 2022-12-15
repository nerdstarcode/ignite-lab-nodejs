import { Notification } from '@application/entities/notification/notification';

export class PrismaNotificationMapper {
    static toPrisma(notification: Notification) {
        return {
            id: notification.id,
            content: notification.content.value,
            category: notification.category,
            recipientId: notification.recipientId,
            readtedAt:notification.readAt,
            createdAt: notification.createdAt,
        };
    }
}