import DesktopImage from "../../assets/Artists/OJMacMillions/Desktop.jpeg";
import MobileImage from "../../assets/Artists/OJMacMillions/Mobile.jpeg";
import SA1 from "../../assets/Artists/OJMacMillions/albums/SeparationAnxiety/Front_SA.jpeg";
import RR1 from "../../assets/Artists/OJMacMillions/albums/RoyalResilience/Front_RoyalResilience.jpeg";
import RR2 from "../../assets/Artists/OJMacMillions/albums/RoyalResilience/Back_RoyalResilience.jpeg";
import LOAK1 from "../../assets/Artists/OJMacMillions/albums/LifeOfAKing/Front_LifeOfAKing.jpeg";
import Background from "../../assets/Artists/OJMacMillions/Background.jpeg";
import SeparationAnxiety from "../../assets/Artists/OJMacMillions/albums/SeparationAnxiety";
import RoyalResilience from "../../assets/Artists/OJMacMillions/albums/RoyalResilience";
import LifeOfAKing from "../../assets/Artists/OJMacMillions/albums/LifeOfAKing";

const OJMacMillions = {
  name: "O.J. MacMillion$",
  linkTo: "OJMacMillions",
  bio: [
    "Father. Musician. CEO. Entrepreneur.",
    "Born in Denver, Colorado, raised in Saint Louis, Missouri, OJ MacMillion$ mixes Hip-Hop & with Gospel vibes to spread a positive message through his music.",
    "Losing the mother of his youngest daughter & his biggest fan, Queen T. Ashby, further propelled him into his destiny. The CEO of IBêêDa Royalty, OJ founded the label in honor of Queen.",
  ],
  message: "Separation Anxiety Out on all platforms!",
  photos: {
    desktop: DesktopImage,
    mobile: MobileImage,
    background: Background,
  },
  releases: [
    {
      year: 2022,
      name: "Separation Anxiety",
      frontCover: SA1,
      backCover: null,
      music: SeparationAnxiety,
      links: {
        amazon:
          "https://www.amazon.com/music/player/albums/B09YVY92NG?ref=sr_1_1&keywords=oj+macmillions+separation+anxiety&crid=1ATJMTHXIG0PX&sprefix=oj+macmillioseparation+anxiety%2Caps%2C134&qid=1651365313&sr=8-1",
        spotify: "https://open.spotify.com/album/3MiukoJbSYdG0tUMlF1dQi",
        apple: "https://music.apple.com/us/album/separation-anxiety/1621179321",
        youtube:
          "https://www.youtube.com/watch?v=_LFjJ6_-wMo&list=OLAK5uy_nKTFlQF8gI17CcHITHKITkD8l_QMOj8nE",
      },
    },
    {
      year: 2021,
      name: "Royal Resilience",
      frontCover: RR1,
      backCover: RR2,
      music: RoyalResilience,
      links: {
        amazon:
          "https://www.amazon.com/music/player/albums/B09WVKQ575?ref=sr_1_6&keywords=Royal+Resilience&crid=3RYWGW08IEXH3&sprefix=royal+resilience%2Caps%2C128&qid=1651365247&sr=8-6",
        spotify: "https://open.spotify.com/album/0RAah4fhOtUgCjTwqmq1Ei",
        apple: "https://music.apple.com/us/album/royal-resilience/1616863444",
        youtube:
          "https://www.youtube.com/watch?v=zZnol_nf4XY&list=OLAK5uy_kUf7-5hKar177wD7wmC6hIJdyVUvgigyA",
      },
    },
    {
      year: 2020,
      name: "Life of a King",
      frontCover: LOAK1,
      backCover: null,
      music: LifeOfAKing,
      links: {
        apple: "https://music.apple.com/us/album/life-of-a-king-ep/1517232643",
        youtube:
          "https://www.youtube.com/watch?v=7sXIWryUjLA&list=OLAK5uy_nWg0RwT42Jd8LMJAAkUG3t3PteZFw6roM",
      },
    },
  ],
  fonts: {
    header: "'Rubik Wet Paint', cursive;",
  },
  colors: {
    main: "#7851a9",
    shadow: "black",
  },
  socialMedia: {
    instagram: "https://www.instagram.com/o.j._macmillions/",
    facebook: "https://www.facebook.com/profile.php?id=100080706850007",
    spotify: "https://open.spotify.com/artist/5PLYCbKPzYGthTIxd36ni0",
    apple: "https://music.apple.com/us/search?term=o.j.%20macmillions",
  },
};

export default OJMacMillions;
