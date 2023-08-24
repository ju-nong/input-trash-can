import React, { useRef, useState } from "react";
import styled from "@emotion/styled";

const InputIDStyled = styled.div`
    min-width: 200px;
    display: inline-block;
    position: relative;
    z-index: 1;
    border-radius: 20px 0px 0px 20px !important;
    white-space: nowrap;

    &:empty::before {
        content: "Your Email";
        color: rgba(0, 0, 0, 0.3);
        position: absolute;
        pointer-events: none;
    }
`;

const BlockStyled = styled.span`
    position: absolute;
    z-index: 2;
    width: 10px;
    height: 100%;
    right: 0;
    background-color: #fff;
`;

function InputID() {
    const $input = useRef<HTMLDivElement | null>(null);

    function handleInput() {
        if ($input.current) {
            if ($input.current.offsetWidth > 200) {
                const caretPos = document.getSelection()?.anchorOffset;

                const { innerText } = $input.current;

                // setTrash((trash) => [...trash, innerText.slice(-1)]);

                $input.current.innerText = innerText.slice(
                    0,
                    innerText.length - 1,
                );

                // 커서 위치 재설정
                const range = document.createRange();
                const sel = window.getSelection();

                range.setStart($input.current.childNodes[0], caretPos! - 1); // -1 하여 마지막 위치에 커서를 놓음
                range.collapse(true);
                sel?.removeAllRanges();
                sel?.addRange(range);
            }
        }
    }

    // 붙여넣기 방지
    function handlePaste(event: React.ClipboardEvent<HTMLDivElement>) {
        event.preventDefault();
    }

    return (
        <>
            <InputIDStyled
                contentEditable
                ref={$input}
                onInput={handleInput}
                onPaste={handlePaste}
            />
            <BlockStyled />
        </>
    );
}

export { InputID };
