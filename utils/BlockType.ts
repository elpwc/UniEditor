enum BlockType{
    Text,
    /*Save as raw HTML string*/
    Image,
    /* url: string, description: string, size: number */
    Table,
    /* th: string[],  td: string[][]*/
    List,
    Markdown,
    Code,
    HTML,
    IFrame,
}

export default BlockType;