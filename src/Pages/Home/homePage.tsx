import React from 'react';
import { Container, BigButton } from './styled';
import { HomePageHeader } from "../../Components";
import { Paper } from "../../Layouts/Paper/Paper";
import { Login } from "../../Components";

let title = 'Manage your finances';
let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Aenean et tortor at risus viverra adipiscing at in. Neque aliquam vestibulum
                    morbi blandit cursus risus at ultrices. Vitae tortor condimentum lacinia quis vel eros donec. Ornare
                    arcu dui vivamus arcu felis bibendum ut tristique. Consectetur libero id faucibus nisl tincidunt
                    eget nullam. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. In massa tempor nec
                    feugiat nisl. Velit laoreet id donec ultrices tincidunt arcu non. Nisi quis eleifend quam adipiscing
                    vitae proin sagittis nisl rhoncus. Lectus magna fringilla urna porttitor. Id ornare arcu odio ut sem
                    nulla pharetra diam. Sapien pellentesque habitant morbi tristique senectus et.`;

export const homePage = () => {
    return (
        <Container>
            <HomePageHeader/>
            <Paper title={title} text={text}>
                <BigButton>Create free account</BigButton>
                <Login path="/login" title="Log in"/>
            </Paper>
        </Container>
    );
};
