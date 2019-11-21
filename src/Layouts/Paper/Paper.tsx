import React from 'react';
import {H1, Paragraph} from "./styled";

type PaperProps = {
  title: string,
  text: string,
  children?: React.ReactNode
};

export const Paper = ({title, text, children}: PaperProps) => {
    return (
        <article>
            <H1>
                {title}
            </H1>
            <Paragraph>
                {text}
            </Paragraph>
            {children}
        </article>
    )
};
