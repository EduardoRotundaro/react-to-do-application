import React, { Fragment } from 'react';

import Row from '../../layout/Row';
import Column from '../../layout/Column';

import Box from './Box';
import SocialIcons from './SocialIcons';

export default props => (
    <Fragment>
        <Row hAlign="center">
            <Column sizes="12-10-10-10-10">
                <Box/>
            </Column>
        </Row>
        <br/><br/><br/>
        <Row hAlign="center">
            <Column sizes="12-10-10-10-10">
                <SocialIcons/>
            </Column>
        </Row>
    </Fragment>
)