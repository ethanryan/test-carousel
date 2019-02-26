import React from 'react';
import styled from 'styled-components';
import TestCarouselForLDP from './TestCarouselForLDP';

class TestCarouselContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlideIndex: 7,
    };
  }

  render() {
    console.log('TestCarouselContainer, this.state is: ', this.state);
    const { currentSlideIndex } = this.state;
    return (
      <div>
        <TitleWrapper>TestCarouselContainer:</TitleWrapper>
        <TestCarouselForLDP selectedItem={currentSlideIndex} />
      </div>
    );
  }
}

export default TestCarouselContainer;

const TitleWrapper = styled.span`
  background: yellow;
`;
