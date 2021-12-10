import BlockType from "./BlockType";

export default interface Block{
    id: number;
    type: BlockType;
    data: JSX.Element;
}

export class BlockUtils{
    static create(id: number,type: BlockType, data: JSX.Element){
        return {
            id: id,
            type: type,
            data: data,
        };
    }
}