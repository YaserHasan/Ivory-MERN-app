import { useState } from 'react';

import { DEVICE_SIZES } from '../constants/responsive_breakPoints';


function useIsOnDevice(deviceSize) {
    const [ isOn, setIsOn ] = useState(getIsOn());

    function getIsOn() {
        return getWindowSize() <= deviceSize;
    }

    function getWindowSize() {
        return document.documentElement.clientWidth;
    }

    window.addEventListener('resize', e => {
        setIsOn(getIsOn());
    });
    return isOn;
}

export { useIsOnDevice, DEVICE_SIZES };