import { useState } from 'react';

import { DEVICE_SIZES } from '../constants/responsive_breakPoints';


function useIsOnDevice(deviceSize) {
    const deviceSizesList = Object.values(DEVICE_SIZES);
    const [ isOn, setIsOn ] = useState(getIsOn());

    function getIsOn() {
        const currentSizeIndex = deviceSizesList.findIndex(value => deviceSize === value);
        if (currentSizeIndex === 0) {
            return getWindowSize() <= deviceSize;
        }
        if (currentSizeIndex === deviceSizesList.length - 1) {
            return getWindowSize() >= deviceSize;
        }
        const outOfPreviousSizeRange = getWindowSize() > deviceSizesList[currentSizeIndex - 1];
        const inCurrentSizeRange = getWindowSize() <= deviceSize;
        return (outOfPreviousSizeRange && inCurrentSizeRange);
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