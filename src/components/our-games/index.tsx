"use client";
import { ContainerBlock } from "../common/header/styled";
import {
  ShowAllGame,
  SlideGameItem,
  SlideGames,
  TitleBlock,
  WrapOurGames,
  WrapSlideGameItem,
} from "./styled";

export default function OurGames() {
  return (
    <WrapOurGames id="games">
      <TitleBlock>
        <h2 className="mb-6">Our Games</h2>
        <p className="text-center">
          As a pioneer of mobile app gamification, we take pride in originality
          and individuality, providing global players with state-of-the-art
          games that feature splendid storylines, sensational sound effects and
          magnificent animation that never cease to impress.
        </p>
      </TitleBlock>
      <ContainerBlock>
        <ShowAllGame className="flex">
          {LIST_GAMES.map((row: GameSlideType[], index: number) => (
            <SlideGames className="flex flex-col" key={index}>
              {row.map((game: GameSlideType, jdex: number) => (
                <WrapSlideGameItem key={jdex}>
                  <SlideGameItem
                    className="flex flex-col items-start justify-end"
                    style={{
                      backgroundImage: `url(${game.img})`,
                    }}
                  >
                    <h3>{game.title}</h3>
                    <p>{game.des}</p>
                  </SlideGameItem>
                </WrapSlideGameItem>
              ))}
            </SlideGames>
          ))}
        </ShowAllGame>
      </ContainerBlock>
    </WrapOurGames>
  );
}

type GameSlideType = {
  img: string;
  title: string;
  des: string;
};

const LIST_GAMES = [
  [
    {
      img: "/assets/images/games/img-g1.png",
      title: "E-Space",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/assets/images/games/img-g2.png",
      title: "Pirates",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/assets/images/games/img-g3.png",
      title: "Magic tree",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
  [
    {
      img: "/assets/images/games/img-g4.png",
      title: "Kingland",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/assets/images/games/img-g5.png",
      title: "Witch Party",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/assets/images/games/img-g6.png",
      title: "Aborigines",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
  [
    {
      img: "/assets/images/games/img-g7.png",
      title: "The Last Game",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/assets/images/games/img-g8.png",
      title: "Rocky",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/assets/images/games/img-g9.png",
      title: "Cinderella",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
  [
    {
      img: "/assets/images/games/img-g10.png",
      title: "G-Dragon",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/assets/images/games/img-g11.png",
      title: "Blue Fire",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/assets/images/games/img-g12.png",
      title: "Egypt Game",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
];
