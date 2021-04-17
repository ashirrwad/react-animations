import React from 'react'
import styled from "styled-components"
import {motion} from "framer-motion"
import StarOne from '../images/Star 1.svg'
import StarTwo from '../images/Star 2.svg'
import StarThree from '../images/Star 3.svg'


const Section = styled.section`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: #131313;

`
const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
height: 100vh;
padding: 3 rem calc((100vw - 1300px)/2);

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}
`
const ColumnLeft = styled.div`
display: flex;
color: #fff;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 5rem 2rem;

h1{
    margin-bottom: 0.5rem;
    font-size: 2rem;

}

p{
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;

}

`
const Button = styled(motion.button)`

padding: 1rem 3rem;
font-size: 1rem;
border: 2px solid #fff;
border-radius: 4px;
outline: none;
cursor: pointer;
background: transparent;
color: #fff

`

const Image = styled(motion.img)`

position: absolute;
width: 100%;
height: 100%;
max-width: 250px;
max-height: 250px;


`
const ColumnRight = styled.div`

display: flex;
justify-content: center;
align-items: center;
padding: 2rem;
position: relative;

${Image}:nth-child(1){
    top: 10px;
    left:10px;
}

${Image}:nth-child(2){
    top: 170px;
    right:10px;
}

${Image}:nth-child(3){
    top: 350px;
    left:50px;
}

`


const Hero = () => {


    const FadeLeft ={
        hidden: {opacity:0, x:-100},
        visible: {opacity: 1, x:0}
    }
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <motion.h1
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:1}}>
                        This is heading 1
                        </motion.h1>
                    <motion.p
                    variants={FadeLeft}
                    initial='hidden'
                    animate='visible'
                    transition={{duration:1}}
                    >Heading description</motion.p>
                    <Button
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9,backgroundColor:"#fff",border:'none',color:"#000",fontWeight:"bold"}}
                        initial={{opacity:0}}
                        animate={{opacity:1, transition: {duration: 1.5}}}
                        
                    >Get Started</Button>
                </ColumnLeft>
                <ColumnRight>
                    <Image src={StarOne} alt='star'
                     whileTap={{scale: 0.9}}
                     drag={true}
                     dragConstraints={{left:0, right: 300, top:0, bottom: 300}}
                     initial={{opacity:0, y:-100}}
                     animate={{opacity:1, y:0, transition: {duration:1}}} />
                    <Image src={StarTwo} alt='star'
                    whileTap={{scale: 0.7}}
                    drag={true}
                    dragConstraints={{left:0, right: 0, top:0, bottom: 100}}
                    initial={{opacity:0, y:-100}}
                    animate={{opacity:1, y:0, transition: {duration:1.1}}} />
                    <Image src={StarThree} alt='star' 
                    whileTap={{scale: 1.1}}
                    drag={true}
                    dragConstraints={{left:0, right: 100, top:0, bottom: 300}}
                    initial={{opacity:0, y:-100}}
                    animate={{opacity:1, y:0, transition: {duration:0.9}}}/>

                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Hero
