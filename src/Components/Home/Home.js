import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="left">
        <img
          className="home-img"
          src="https://wallpapers.com/images/featured-full/studio-ghibli-iphone-a60tyc9qr1oueewu.jpg"
          alt="Ghibli Studios"
        />
      </div>
      <div className="right">
        <p>
          <h1>STUDIO GHIBLI</h1>
          Studio Ghibli is a renowned Japanese animation film studio known for
          creating critically acclaimed and visually stunning animated movies.
          It was founded in 1985 by
          <strong> Hayao Miyazaki, Isao Takahata, and Toshio Suzuki</strong>.
          The studio's name, <b>Ghibli</b>, is derived from an Arabic word
          meaning "hot desert wind." Studio Ghibli films are characterized by
          their distinctive storytelling, imaginative worlds, rich characters,
          and meticulous attention to detail. The studio has produced a
          remarkable collection of animated films that have garnered
          international acclaim and have touched the hearts of audiences around
          the world. Hayao Miyazaki, one of the co-founders, is widely regarded
          as one of the greatest animation directors of all time. His films,
          such as "My Neighbor Totoro," "Spirited Away," and "Princess
          Mononoke," have become iconic and have won numerous awards, including
          an Academy Award for Best Animated Feature for "Spirited Away." Other
          notable Studio Ghibli directors include Isao Takahata, who directed
          films like "Grave of the Fireflies" and "The Tale of the Princess
          Kaguya," and Hiromasa Yonebayashi, who directed "Arrietty" and "When
          Marnie Was There." Studio Ghibli movies often explore themes of
          environmentalism, coming-of-age, nature, and the delicate balance
          between humans and the natural world. The films beautifully blend
          fantasy and reality, creating immersive and emotionally resonant
          experiences for viewers of all ages. In addition to their captivating
          stories, Studio Ghibli films are also known for their stunning
          animation, breathtaking hand-drawn visuals, and mesmerizing musical
          scores composed by Joe Hisaishi. The popularity and influence of
          Studio Ghibli extend far beyond Japan, and their movies have gained a
          dedicated global fanbase. The studio's works have transcended language
          and cultural barriers, captivating audiences worldwide and earning a
          place in the hearts of animation enthusiasts and film lovers. Studio
          Ghibli's commitment to the art of traditional hand-drawn animation,
          coupled with their imaginative storytelling and universal themes, has
          solidified their position as one of the most respected and beloved
          animation studios in the world.
        </p>
      </div>
    </div>
  );
}

export default Home;
