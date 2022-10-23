import DesktopImage from '../../assets/Artists/AFG/Desktop.jpg'
import MobileImage from '../../assets/Artists/AFG/Mobile.jpg'
import BackgroundImage from '../../assets/Artists/AFG/Background.jpg'
import WOW1 from '../../assets/Artists/AFG/albums/WOW/Front_WOW.png'
import WOW from '../../assets/Artists/AFG/albums/WOW';

const TGK_AFG = {
  name: "TGK AFG",
  linkTo: "TGK_AFG",
  bio: [
    "Tha Great King AF Galilee. A creative writer at every rank.",
    "TGK AFG uses his skills beyond the booth. When he isn’t demolishing beats, he traverses multiple paths with his skills. Comic books. Movies. Plays.",
    "Remember his name. It will be everywhere soon.",
  ],
  message: "follow @tgkafg",
  photos: {
    desktop: DesktopImage,
    mobile: MobileImage,
    background: BackgroundImage,
  },
  releases: [
    {
      year: 2021,
      name: "W.O.W",
      frontCover: WOW1,
      backCover: null,
      music: WOW,
    },
  ],
  fonts: {
    header: "'Rye', cursive;",
  },
  colors: {
    main: "gold",
    shadow: "blue",
  },
  socialMedia: {
    instagram: "https://www.instagram.com/tgkafg/",
    twitter: "https://twitter.com/TGKAFG",
    facebook: "https://www.facebook.com/TGKAFG",
  },
};

export default TGK_AFG;