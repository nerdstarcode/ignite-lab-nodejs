import { SendNotification } from "./send-notification";
import { Notification } from "../entities/notification/notification";

const notificationsRepository = {
    async create(notifications: Notification){
        console.log(notifications)
    }
}

describe('Send Notification',  () => {
    it('should be able to send notifications', async() => {
        const sendNotification = new SendNotification(notificationsRepository);

        const { notification } = await sendNotification.execute({
            content: 'This is a notification',
            category: 'social',
            recipientId: 'randomUUID'
        });

        expect(notification).toBeTruthy();
    })
})