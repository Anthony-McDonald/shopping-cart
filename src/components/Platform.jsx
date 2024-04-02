export default function Platform({ platform }) {
    const srcDictionary = {
        pc: '/assets/svgs/platforms/windows.svg',
        playstation: '/assets/svgs/platforms/playstation.svg',
        xbox: '/assets/svgs/platforms/xbox.svg',
        switch: '/assets/svgs/platforms/switch.svg',
        ios: '/assets/svgs/platforms/ios.svg',
        android: '/assets/svgs/platforms/android.svg',
    }
    // console.log(platform.platform.name);

    switch (platform.platform.name) {
        case 'PC':
            return(<img className="white platform-img" src={srcDictionary.pc} alt={"pc"}></img>)
        case 'PlayStation':
            return(<img className="white platform-img" src={srcDictionary.playstation} alt={"playstation"}></img>)
        case 'Xbox':
            return(<img className="white platform-img" src={srcDictionary.xbox} alt={"xbox"}></img>)
        case 'Nintendo':
            return(<img className="white platform-img" src={srcDictionary.switch} alt={"switch"}></img>)
        case 'iOS':
            return(<img className="white platform-img" src={srcDictionary.ios} alt={"ios"}></img>)
        case 'Android':
            return(<img className="white platform-img" src={srcDictionary.android} alt="android"></img>)
    }

}