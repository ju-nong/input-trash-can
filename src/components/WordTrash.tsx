import React from "react";
import styled from "@emotion/styled";

const WordTrashStyled = styled.div`
    position: absolute;
    top: 4px;
    right: 0;
    border: 1px solid #000;
    z-index: 3;
    visibility: hidden;
    animation: word-trash 1.5s;
`;

function WordTrash() {
    return <WordTrashStyled>d</WordTrashStyled>;
}

export { WordTrash };
