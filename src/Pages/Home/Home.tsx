import React from 'react';
import styled from 'styled-components';
import {Header, Container, Link, H1, Paragraph, BigButton, Login} from './styled';



export const Home = function () {
    return (
        <Container>
            <Header>
                <div>logo</div>
                <div>
                    <Link href="#">Link</Link>
                    <Link href="#">Link</Link>
                </div>
            </Header>
            <article>
                <H1> Manage your finances </H1>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Aenean et tortor at risus viverra adipiscing at in. Neque aliquam vestibulum
                    morbi blandit cursus risus at ultrices. Vitae tortor condimentum lacinia quis vel eros donec. Ornare
                    arcu dui vivamus arcu felis bibendum ut tristique. Consectetur libero id faucibus nisl tincidunt
                    eget nullam. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. In massa tempor nec
                    feugiat nisl. Velit laoreet id donec ultrices tincidunt arcu non. Nisi quis eleifend quam adipiscing
                    vitae proin sagittis nisl rhoncus. Lectus magna fringilla urna porttitor. Id ornare arcu odio ut sem
                    nulla pharetra diam. Sapien pellentesque habitant morbi tristique senectus et.
                </Paragraph>
                <BigButton>Create free account</BigButton>
                <Login href="/login">Log in</Login>
            </article>
        </Container>
);
};
