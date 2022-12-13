export interface NotificarionProps{
    recipientId: string;
    content: string;
    category: string;
    readAt?: Date | null;
    createdAt: Date;
}
export class Notification{
    private props: NotificarionProps;

    constructor(props: NotificarionProps){
        this.props = props;
    }

    public set content(content: string){
        this.props.content = content;
    }

    public get content():string{
        return this.props.content;
    }
}
