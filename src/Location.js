import React, { Component } from 'react';
import styled from 'styled-components';
import MyMap from './MyMap';


class Location extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             checked: false,
        }
    }
    
    render() {
      const AppWrapper = styled.div`
        display: flex;
        justify-content: center;
        width: auto;
        `;

      const Container = styled.div`
        width: 100%;
        text-align: -webkit-center;
      `;

        return(
            <AppWrapper>
                <Container> 
                    <MyMap />                   
                </Container>
            </AppWrapper>
        )
    }
}

export default Location;


