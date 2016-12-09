export class Item{
    id: number;
    name: string;
    comments: Comment[];

    constructor(name: string) {
        this.name = name;
    }
}