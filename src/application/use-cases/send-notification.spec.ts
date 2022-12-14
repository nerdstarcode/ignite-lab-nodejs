import { SendNotification } from "./send-notification";
import { Notification } from "../entities/notification/notification";

const notifications: Notification[] = [];

const notificationsRepository = {
    async create(notification: Notification){
        notifications.push(notification);        
    }
}

describe('Send Notification',  () => {
    it('should be able to send notifications', async() => {
        const sendNotification = new SendNotification(notificationsRepository);

        await sendNotification.execute({
            content: 'This is a notification',
            category: 'social',
            recipientId: 'randomUUID'
        });
        console.log(notifications);
        expect(notifications).toHaveLength(1);
    })
})