import { useState } from "react";
import { BlockUtils } from "../../utils/Block";
import BlockType from "../../utils/BlockType";
import Paragraph, { ParagraphUtils } from "../../utils/Paragraph";
import UniParagraph from "../innerCompo/UniParagraph";

interface P {
    className?: string;
    id?: string;
    style?: React.CSSProperties
}

const UniEditorTextbox = (props: P) => {
    const [paragraphs, setParagraphs]: [Paragraph[], any] = useState([]);
    const [update, setUpdate]: [boolean, any] = useState(false);

    const updateNow = () => { setUpdate(!update); };

    let currentParagraph: number = 0, currentBlock: number = 0;

    const textboxSelected = (id: number, blockId: number) => {
        currentParagraph = id;
        currentBlock = blockId;
        updateNow();
    };

    const textbox = document.getElementById('umieditbox');

    return (<>
        <div className={props.className} id={props.id} style={props.style}>
            <div>
                <button onClick={() => {
                    const t_paras = [...paragraphs];
                    t_paras.push(ParagraphUtils.create(1, [BlockUtils.create(1, BlockType.Text, <><p>114514</p></>),]));
                    setParagraphs(t_paras);
                }}>加入段落</button>

                <button onClick={() => {

                }}>加入块</button>
                <button onClick={() => {
                }}>设置颜色</button>
                <button onClick={() => {
                    document.execCommand('bold', false, 'null');
                }}>粗体</button>
                <button onClick={() => {
                    document.execCommand('bold', false, 'null');
                }}>斜体</button>
                <button onClick={() => {
                }}>下划线</button>
                <button onClick={() => {
                }}>删除线</button>
                <button onClick={() => {
                }}>超链接</button>
                <button onClick={() => {
                }}>图片</button>
                <button onClick={() => {
                }}>嵌入</button>
                <button onClick={() => {
                }}>表格</button>
                <button onClick={() => {
                }}>列表</button>
                <button onClick={() => {
                    console.log(textbox?.innerHTML);
                }}>保存</button>
            </div>
            <div style={{ backgroundColor: 'white' }}>
                <div contentEditable suppressContentEditableWarning id='umieditbox'>
                    {
                        paragraphs.map((p: Paragraph) => {
                            return <UniParagraph paragraph={p} key={p.id} onSelect={textboxSelected}></UniParagraph>;
                        })
                    }

                </div>
            </div>
        </div>


    </>);
}

export default UniEditorTextbox;