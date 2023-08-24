import styled from "@emotion/styled";
import React, { useRef } from "react";

const FormStyled = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: flex-start;

    > button {
        border: 1px solid #000;
        border-radius: 20px;
        padding: 8px 16px;
        align-self: center;
        cursor: pointer;
    }

    > img {
        position: relative;
        align-self: flex-end;
        width: 100px;
        right: -50px;
    }
`;

const ItemStyled = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    height: 31px;

    > div,
    > input {
        height: 100%;
        padding: 4px 10px;
        border-radius: 20px;
        border: 1px solid #000;
    }

    > input {
        max-width: 190px;

        &::placeholder {
            color: rgba(0, 0, 0, 0.3);
        }
    }
`;

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

function App() {
    const $input = useRef<HTMLDivElement | null>(null);

    function handleInput() {
        if ($input.current) {
            if ($input.current.offsetWidth > 200) {
                const caretPos = document.getSelection()?.anchorOffset;

                const { innerText } = $input.current;

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
        <FormStyled>
            <ItemStyled>
                <InputIDStyled
                    contentEditable
                    ref={$input}
                    onInput={handleInput}
                    onPaste={handlePaste}
                />
                <BlockStyled />
            </ItemStyled>
            <ItemStyled>
                <input type="password" placeholder="Password" />
            </ItemStyled>
            <button>Sign Up</button>
            <img src="/images/trash-can.png" alt="trash-can" />
        </FormStyled>
    );
}

export default App;
