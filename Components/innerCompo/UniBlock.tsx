import Block from "../../utils/Block";
import BlockType from "../../utils/BlockType";

interface P {
    block: Block;
    width: string;
    onSelect: (id: number) => void;
}

const UniBlock = (props: P) => {

    return (<><div style={{width: props.width}} onClick={()=>{props.onSelect(props.block.id);}}>
        {
            props.block.data
        }
    </div></>);
}

export default UniBlock;