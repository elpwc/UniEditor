import Block from "./Block";

export default interface Paragraph{
    id: number;
    blocks: Block[];
}

export class ParagraphUtils{
    static create(id: number, blocks: Block[]){
        return {
            id: id,
            blocks: blocks,
        };
    }
}