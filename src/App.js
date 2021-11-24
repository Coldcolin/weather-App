import React from 'react'
import styled from 'styled-components'
import WeatherUi from './Component/WeatherUi'

function App() {
  return (
    <Container>
      <Wrapper>
        <WeatherUi/>
      </Wrapper>
    </Container>
  );
}

export default App;

const Container = styled.div``
const Wrapper = styled.div``