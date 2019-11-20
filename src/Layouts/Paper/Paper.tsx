import React from 'react';
import {H1, Paragraph} from "./styled";
import {Container} from "../../Pages/Home/styled";

type PaperProps = {
  title: string,
  text: string
};

export const Paper = ({title, text}: PaperProps) => {
    return (
        <article>
            <H1>
                {title}
            </H1>
            <Paragraph>
                {text}
            </Paragraph>
        </article>
    )
};
