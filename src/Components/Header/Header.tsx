import React from 'react';
import {Link} from '../Link/Link';
import {HeaderBlock} from './styled';

export const Header = () => {
    return (
        <HeaderBlock>
            <div>logo</div>
            <div>
                <Link path="#" title="Link"/>
                <Link path="#" title="Link"/>
            </div>
        </HeaderBlock>
    )
};
