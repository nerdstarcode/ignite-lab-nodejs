import { SendNotification } from "./send-notification";
import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";



describe('Send Notification',  () => {
    it('should be able to send notifications', async() => {
        const notificationsRepository = new InMemoryNotificationsRepository
        const sendNotification = new SendNotification(notificationsRepository);

        await sendNotification.execute({
            content: 'This is a notification',
            category: 'social',
            recipientId: 'randomUUID'
        });
        expect(notificationsRepository.notifications).toHaveLength(1);
    })
})