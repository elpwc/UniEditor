import Block from "../../utils/Block";
import Paragraph from "../../utils/Paragraph";
import UniBlock from "./UniBlock";

interface P {
    paragraph: Paragraph
    onSelect: (id: number, blockId: number) => void;
}

const UniParagraph = (props: P) => {

    return (<><section style={{padding: '10px 50px', display: 'flex'}}>
        {
            props.paragraph.blocks.map((b: Block) => {
                return <UniBlock block={b} width={`${100 / props.paragraph.blocks.length}%`} key={b.id} onSelect={(id: number) => {props.onSelect(props.paragraph.id, id);}}></UniBlock>;
            })
        }
    </section></>);
}

export default UniParagraph;