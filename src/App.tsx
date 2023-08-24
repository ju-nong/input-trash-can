import styled from "@emotion/styled";
import { useState } from "react";
import { InputID, WordTrash } from "./components";

const FormStyled = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: flex-start;
    position: relative;

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
        z-index: 5;
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

function App() {
    const [trash, setTrash] = useState<string[]>([]);

    function handleThrowAway(word: string) {
        setTrash((trash) => [...trash, word]);
    }

    return (
        <FormStyled>
            {trash.map((item) => (
                <WordTrash>{item}</WordTrash>
            ))}
            <ItemStyled>
                <InputID onThrowAway={handleThrowAway} />
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
