import styled from 'styled-components'

export const Container = styled.div`
 padding:80px 60px;
 background: radial-gradient(circle, rgba(255, 255, 255, 1 ) 0%, rgba(255, 255, 255, 1) 100%);
`


  
export const Wrapper = styled.div`
display: flex;
flex-direction : column;
justify-content: center; 
max-width: 2000px;
margin: 0 auto;

`

export const Base = styled.div`
background: radial-gradient(circle, rgba(0, 0, 255, 1 ) 0%, rgba(0, 0, 255, 1) 100%);
width: 1440px;
height: 100px;
top: 2968px;

`



export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`

export const Row = styled.div`
 display: grid;
 grid-template-column: repeat(auto-fill, minmax(250px, 1fr));
 grid-gap: 50px;
 @media (max-width: 3000px) {
     grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
 }
`

export const Link = styled.div`
 color: #000000;
 margin-bottom: 20px;
 font-size: 18px;
 text-decoration: none;
 &:hover {
     color: #ff9c00;
     transition: 200ms ease-in;
 }
`

export const Title = styled.div`
 font-size: 24px;
 color: #000000;
 margin-bottom: 40px;
 font-weight: bold;
`