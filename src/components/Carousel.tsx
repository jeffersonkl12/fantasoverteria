import { Box } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import BoxFadeAnimation from "./BoxFadeAnimation";

interface ArrowSlideProp {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  dir?: string;
  onClick?: () => void;
}

const ArrowSlide = ({
  dir = "left",
  children,
  style,
  onClick,
}: ArrowSlideProp) => {
  return (
    <>
      <Box
        style={style}
        cursor={"pointer"}
        position={"absolute"}
        top={"50%"}
        width={"auto"}
        marginTop={"-22px"}
        padding={"1rem"}
        color={"black"}
        fontWeight={"bold"}
        fontSize={"1rem"}
        borderRadius={"0 3px 3px 0"}
        userSelect={"none"}
        left={dir === "left" ? 0 : "auto"}
        right={dir === "right" ? 0 : "auto"}
        zIndex={10}
        onClick={onClick}
      >
        {children}
      </Box>
    </>
  );
};

interface CarouselItemProp {
  children?: React.ReactNode;
  isDisplay?: boolean;
}

const CarouselItem = ({ isDisplay = false, children }: CarouselItemProp) => {
  return (
    <>
      <Box display={isDisplay ? "block" : "none"}>
        <BoxFadeAnimation>{children}</BoxFadeAnimation>
      </Box>
    </>
  );
};

interface CarouselProp {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  styleArrow?: React.CSSProperties;
  temp?: string;
}

const Carousel = ({
  children,
  style,
  styleArrow,
  temp = "8s",
}: CarouselProp) => {
  const tamanhoItems = React.Children.count(children);
  const [carouselItemDisplay, setCarouselItemDisplay] = useState(
    new Array(tamanhoItems).fill(false)
  );
  const index = useRef(0);
  const timeSlide = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const auxCarouselItemDisplay = carouselItemDisplay.slice();
    auxCarouselItemDisplay[0] = true;
    setCarouselItemDisplay(auxCarouselItemDisplay);

    novoIntervalo();
  }, []);

  const onClickArrowSlide = (count: number) => {
    const auxCarouselItemDisplay = carouselItemDisplay.slice();
    auxCarouselItemDisplay.fill(false);

    if (count >= tamanhoItems) {
      index.current = 0;
    } else if (count < 0) {
      index.current = tamanhoItems - 1;
    } else {
      index.current = count;
    }

    auxCarouselItemDisplay[index.current] = true;

    setCarouselItemDisplay(auxCarouselItemDisplay);

    novoIntervalo();
  };

  const tempoMs = Number.parseInt(temp.split("s")[0]) * 1000;

  const novoIntervalo = () => {
    clearInterval(timeSlide.current);
    timeSlide.current = setInterval(
      () => onClickArrowSlide(index.current + 1),
      tempoMs
    );
  };

  return (
    <>
      <Box
        style={style}
        w={"100%"}
        h={"100%"}
        minH={"10rem"}
        overflow={"hidden"}
        position={"relative"}
        margin={"auto"}
      >
        {children &&
          React.Children.toArray(children).map((c, i) => {
            return (
              <CarouselItem key={i} isDisplay={carouselItemDisplay[i]}>
                {c}
              </CarouselItem>
            );
          })}

        <ArrowSlide
          style={styleArrow}
          onClick={() => onClickArrowSlide(index.current - 1)}
        >
          &#10094;
        </ArrowSlide>
        <ArrowSlide
          style={styleArrow}
          onClick={() => onClickArrowSlide(index.current + 1)}
          dir="right"
        >
          &#10095;
        </ArrowSlide>
      </Box>
    </>
  );
};

export default Carousel;
