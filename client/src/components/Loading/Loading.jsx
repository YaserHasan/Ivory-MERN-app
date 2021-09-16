import React from 'react';

import * as Styles from './LoadingStyles';


function Loading({ small }) {
    return (
        <Styles.Root small={small}>
            <Styles.LoadingElement small={small} />
        </Styles.Root>
    );
}

export default Loading;
