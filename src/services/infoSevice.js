export const infoService = {
    getInfoIntro,
    getQueAns,
    getHeaderMedia,
    getUserImg,
}


function getInfoIntro() {
    return infoIntro
}
function getQueAns() {
    return questsAns
}
function getHeaderMedia() {
    return headerMedia
}
function getUserImg() {
    return userImg
}



const infoIntro = [
    {
        id: 1,
        title: "Enjoy on your TV.",
        subTitle: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
        image: "tv-border.png",
        video: { url: "slides-video.m4v", className: "sliders-vid" },
    },
    {
        id: 2,
        title: "Download your shows to watch offline.",
        subTitle: "Save your favorites easily and always have something to watch.",
        image: { url: "home-mobile.jpg", className: "phone-img" },
    },
    {
        id: 3,
        title: "Watch everywhere.",
        subTitle: "Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.",
        image: "responsive-borders.png",
        video: { url: "school-video.m4v", className: "kids-vid" },
    },
    {
        id: 4,
        title: "Create profiles for kids..",
        subTitle: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
        image: { url: "kids.png", className: "kids-img" },
    }
]


const questsAns = [
    {
        id: 1,
        header: "What is NetPlix?",
        body: { txt: "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices.\n\n You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!", isShown: false }
    },
    {
        id: 2,
        header: "How much does NetPlix cost?",
        body: { txt: "Watch NetPlix on your smartphone, tablet, smart TV, laptop or streaming device, all for one low fixed monthly fee. Plans start from £5.99 a month. No extra costs or contracts.", isShown: false }
    },
    {
        id: 3,
        header: "Where can I watch?",
        body: { txt: "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your NetPlix account to watch instantly on the web at NetPlix.com from your personal computer or on any internet-connected device that offers the NetPlix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\nYou can also download your favourite programmes with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take NetPlix with you anywhere.", isShown: false }
    },
    {
        id: 4,
        header: "How do I cancel?",
        body: { txt: "NetPlix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time.", isShown: false }
    },
    {
        id: 5,
        header: "What can I watch on NetPlix?",
        body: { txt: "NetPlix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning NetPlix originals, and more. Watch as much as you want, any time you want.", isShown: false }
    }
]


const headerMedia = [
    {
        _id: '62122103193ebc18af044eeb',
        path: '/kids',
        title: 'Frozen',
        description:
            'Anna sets out on a journey with an iceman, Kristoff, and his reindeer, Sven, in order to find her sister, Elsa, who has the power to convert any object or person into ice.',
        trailer: require(`../assets/videos/media-videos/frozen.mp4`),
        img: require(`../assets/img/media-img/frozen.jpg`)
    },
    {
        _id: '62121edc193ebc18af020e3b',
        path: '/tv-series',
        title: 'Amanda Knox',
        description: 'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.',
        trailer: require(`../assets/videos/media-videos/amanda-knox.mp4`),
        img: require(`../assets/img/media-img/amanda-knox.jpg`)
    },
    {
        _id: '621220a4193ebc18af03d804',
        path: '/movies',
        title: 'Midnight in Paris',
        description: 'Gil arrives with his fiancee and her family in Paris for a vacation, even as he tries to finish his debut novel. He is beguiled by the city, which takes him to a time past, away from his fiancee.',
        trailer: require(`../assets/videos/media-videos/midnight-in-paris.mp4`),
        img: require(`../assets/img/media-img/midnight-in-paris.jpg`)
    },
    {
        _id: '62122129193ebc18af0481ba',
        path: '/media',
        title: 'Joker',
        description:
            'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City.',
        trailer: require(`../assets/videos/media-videos/joker.mp4`),
        img: require(`../assets/img/media-img/joker1.jpg`)
    }
]

const userImg = [{ id: 1, url: require(`../assets/img/users/1.png`) }, { id: 2, url: require(`../assets/img/users/2.png`) }, { id: 5, url: require(`../assets/img/users/5.png`) }, { id: 3, url: require(`../assets/img/users/3.png`) }, { id: 4, url: require(`../assets/img/users/4.png`) }]






