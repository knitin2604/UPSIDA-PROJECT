import react from 'react'
import Footer from '../components/footer';
import image1 from '../containers/face.png'
import image2 from '../containers/twitter.png'

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                  
                    
                
                <Footer.Column>
                    <Footer.Title>Land Allotment</Footer.Title>
                    <Footer.Link href="#">Industrial Land Allotment Form</Footer.Link>
                    <Footer.Link href="#">Checklist Document</Footer.Link>
                    <Footer.Link href="#">Opening Manual 2011</Footer.Link>
                    <Footer.Link href="#">SOP For Industrial Land Allotment</Footer.Link>
                    
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>UPSIDA</Footer.Title>
                    <Footer.Link href="#">Annexure A. Inspection Procedure Checklist & Performa</Footer.Link>
                    <Footer.Link href="#">Land Regulation 2004 after 26 UPSIDA</Footer.Link>
                    <Footer.Link href="#">Building Regulation 2004 after 26 UPSIDA</Footer.Link>
                    <Footer.Link href="#">UPSIDA Byelaws</Footer.Link>
                    <Footer.Link href="#">SOP Fore Computerised Allocation of Inspector</Footer.Link>
                    
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Security & Policy</Footer.Title>
                    <Footer.Link href="#">Term Of Use</Footer.Link>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                    <Footer.Link href="#">Return/Refund Policy</Footer.Link>
                    <Footer.Link href="#">State Location</Footer.Link>


                    
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Public Forum</Footer.Title>
                    <Footer.Link href="#">View Allotment Detail</Footer.Link>
                    <Footer.Link href="#">View Inspection Document</Footer.Link>
                    <Footer.Link href="#">View Building Plan Document </Footer.Link>
                    <Footer.Link href="#">View Service TimeLine </Footer.Link>

                    
                    
                </Footer.Column>
                
                 <Footer.Column>
                    <Footer.Title>Follow us</Footer.Title>
                    <Footer.Link><img style={{width:'40px'}} href="#" src={image1}/><img  style={{width: '30px'}} href="#" src={image2}/> </Footer.Link>
                    

                    
                    
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

