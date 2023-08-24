import styled from "@emotion/styled";

const WordTrashStyled = styled.div`
    position: absolute;
    top: 4px;
    right: 0px;
    z-index: 3;
    visibility: hidden;
    animation: word-trash 1.5s;
    transform-origin: bottom left;
`;

function WordTrash({ children }: { children: string }) {
    return <WordTrashStyled>{children}</WordTrashStyled>;
}

export { WordTrash };
