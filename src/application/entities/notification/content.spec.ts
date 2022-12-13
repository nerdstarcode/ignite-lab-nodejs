import { Content } from "./content"

test('it should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade!')

    expect(content).toBeTruthy();
});

test('it should be not able to create a notification content with lass than 5 caracters', () => {
    expect(()=> new Content('BIL!')).toThrow();
});

test('it should be not able to create a notification content with more than 240 caracters', () => {
    expect(()=> new Content('A'.repeat(241))).toThrow();
});