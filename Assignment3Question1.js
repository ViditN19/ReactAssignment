import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const Assignment3Question1 = () => {
    const [show, setShow] = useState(false);



    const showbtnstyle = {



        border: 0,



        backgroundColor: 'green',



        color: 'white'


    }

    const hidebtnstyle = {



        border: 0,



        backgroundColor: 'red',



        color: 'white'



    }

    var buttonText = show ? "Hello React !" : "";



    const showTextMessage = () => {

        setShow(true);

    }

    const hideTextMessage = () => {

        setShow(false);

    }

  return (
    <Container>

        <button onClick={showTextMessage} style={showbtnstyle}>Show text</button>

        <br/><br/>

        <p id=""><b><i>{buttonText}</i></b></p>

        <button onClick={hideTextMessage} style={hidebtnstyle}>Hide text</button>  

    </Container>
  )
}

export default Assignment3Question1