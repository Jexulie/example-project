import { User } from './user';

export class Item {
    id: any;
    title: string;
    description: string;
    postedOn: Date;
    owner: User
}