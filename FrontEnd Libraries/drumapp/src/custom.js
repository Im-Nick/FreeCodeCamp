import React from 'react';

const keyPressed = (e) => {
    this.props.bank.keys.forEach((data,index) => {
        if (e.keyCode === data.keyCode) {
            this.setState({
              index: index,
              songUrl: data.url,
              keyID: data.keyCode,
              id: data.id
            });
        }
    }) 
}

export default keyPressed;