
export type Message = {
    _id?: string;
    message: string;
    to: string;
    from: string;
    createdAt?: Date;
    updatedAt?: Date;
}
