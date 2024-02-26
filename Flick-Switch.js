function flickSwitch(arr) {
    let switchValue = true;
    return arr.map(item => {
        if (item === 'flick') {
            switchValue = !switchValue;
        }
        return switchValue;
    });
}