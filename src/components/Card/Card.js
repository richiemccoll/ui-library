import React from "react";
import PropTypes from "prop-types";
import { Container, ImageContainer, Image, Content } from './UIElements';

const Card = ({ title, image, description }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <Content>
        <h2>
          {title}
        </h2>
        <text>
          {description}
        </text>
      </Content>
    </Container>
  );
};

Card.PropTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Card;