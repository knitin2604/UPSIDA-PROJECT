import react from 'react'
import Footer from '../components/footer';
import image from '../containers/fimg.png'

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <p>

                        </p>
                     <button style={{paddingBlock:'15px 10px',background:'blue',fontWeight:"bold",color:"white"}}>Office login</button>
                     <p>

                     </p>
                     <button style={{paddingBlock:'15px 10px',background:'blue',fontWeight:"bold",color:"white"}}>Web Mail</button>
                     <p></p>
                    <img src={image}/>
                     

                    </Footer.Column>
                    
                
                <Footer.Column>
                    <Footer.Title>Top Categories</Footer.Title>
                    <Footer.Link href="#">industrial info</Footer.Link>
                    <Footer.Link href="#">GIS</Footer.Link>
                    <Footer.Link href="#">E-Services</Footer.Link>
                    <Footer.Link href="#">Office Orders</Footer.Link>
                    <Footer.Link href="#">Resource Centre</Footer.Link>
                    <Footer.Link href="#">Available Plot</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Online Services</Footer.Link>
                    <Footer.Link href="#">Track Application</Footer.Link>
                    <Footer.Link href="#">News Letter</Footer.Link>
                    <Footer.Link href="#">Investment Guide</Footer.Link>
                    <Footer.Link href="#">Warehousing and Logistics</Footer.Link>
                    
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>About</Footer.Title>
                    <Footer.Link href="#">UPSIDA</Footer.Link>
                    <Footer.Link href="#">Policies</Footer.Link>
                    
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Important Links</Footer.Title>
                    <Footer.Link href="#">INFRASTRUCTURE & INDUSTRIAL DEVELOPMENT DEPARTMENT</Footer.Link>
                    <Footer.Link href="#">Government of Uttar Pradesh</Footer.Link>
                    <Footer.Link href="#">Tenders Uttar Pradesh</Footer.Link>
                    
                </Footer.Column>
                </Footer.Row>
                <Footer.Base>
                <p style={{color:"white",fontFamily:"sans-serif",fontsize:"20px",paddingLeft:'20px'}}>Content on this website is published and managed by Uttar Pradesh State Industrial Development Authority.<br />
                   For any query regarding this website, please contact the "ADMINISTRATOR".<br />
                   @ UPSIDA, U.P., India | All rights reserved.
                </p>
            
            </Footer.Base>
            </Footer.Wrapper>
            
        </Footer>
       
    )
}

