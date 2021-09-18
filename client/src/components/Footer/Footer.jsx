import React from 'react';

import * as Styles from './FooterStyles';


function Footer() {
    return (
        <>
            {/* moved the divider out because it was causing a overflow problem */}
            <Styles.CustomDivider />
            <Styles.Root>
                <Styles.Main>
                    <h4>Copyright &#169; 2021 Ivory. All Rights Reserved</h4>
                </Styles.Main>
            </Styles.Root>
        </>
    );
}

export default Footer;
