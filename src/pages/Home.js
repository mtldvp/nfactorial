import * as React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faHeart, faHandsHelping} from '@fortawesome/free-solid-svg-icons';
import '../styles/Home.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import FlipMove from 'react-flip-move';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

import { CRow, CCol, CWidgetStatsB } from '@coreui/react';

import { Link } from 'react-router-dom';






const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #f5f5f5;
  text-align: center;
`;



const Title = styled.h1`
  font-size: 3em;
  color: #ffffff;
`;

const TitleDark = styled.h1`
  font-size: 3em;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.5em;
  color: #ffffff9f;
  max-width: 800px;
  margin: 0 auto;
`;




const ContentSection = styled.section`
  padding: 40px;
  background: #fff; /* White content section */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  width: 100%;
`;



const CallToAction = styled.button`
  background: #7faa53; /* Blue button */
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 20px;
  text-decoration: none;
  &:hover {
    background: #9dcf6a; /* Darker blue hover */
  }
`;



function Home() {
  const titleProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200, color: 'white'});
  const subtitleProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 800 });
  const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <Container>
    <div className='HeroSection'>
    <animated.div style={titleProps}>
        <Title>Welcome to ILoveDogs!</Title>
      </animated.div>
      <animated.div style={subtitleProps}>
        <Subtitle>
          We are a community dedicated to the well-being of dogs everywhere. Explore our site 
          to learn about different breeds, find resources for dog owners, and discover ways 
          to support dogs in need.
        </Subtitle>
      </animated.div>
      </div>
      <ContentSection style={{paddingBottom: "7%", paddingTop: "7%"}}>
        <TitleDark>Why Choose Us?</TitleDark>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <div>
            <FontAwesomeIcon icon={faPaw} style={{ fontSize: '4em', color: '#007bff', margin: '10px' }} /> {/* Use Font Awesome icons */}
            <h3>Expert Resources</h3>
            <p>Get access to a wealth of information from dog trainers, veterinarians, and behaviorists.</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart} style={{ fontSize: '4em', color: '#f00',  margin: '10px'  }} />
            <h3>Find Your Perfect Match</h3>
            <p>Explore hundreds of dog breeds and discover the one that best suits your lifestyle.</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faHandsHelping} style={{ fontSize: '4em', color: '#00b894',  margin: '10px'  }} />
            <h3>Support Rescue Efforts</h3>
            <p>Learn about organizations working to help homeless dogs and find ways to get involved.</p>
          </div>
        </div>
      </ContentSection>

        
  
        <ContentSection style={{margin: '4px'}}> 
  <TitleDark style={{ position: 'sticky', top: '0px' }}>Top Breeds!</TitleDark>
  <div style={{ width: '97%', height: '100vh', overflow: 'hidden', marginTop: '10px', display: 'flex', justifyContent: 'center', marginLeft: '5%'}}>

    <Parallax pages={4} style={{width:'100vh'}}>
        {/* 1ST CARD */}

      <ParallaxLayer offset={0} speed={0.3}>
      <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
      <Card component="li" sx={{ height:'40vh', width: '90vh' }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster={require("../assets/img/labrador_poster.png")}
          >
            <source
              src={require("../assets/video/labrador_retriever.mp4")}
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent>
          <Typography
            level="body-lg"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Labrador Retriever
          </Typography>
        </CardContent>
      </Card>

    </Box>
    <Subtitle style={{color: 'black', paddingRight: '5%'}}>
    The Labrador Retriever or simply Labrador is a British breed of retriever gun dog. It was developed in the United Kingdom from St. John's water dogs imported from the colony of Newfoundland (now a province of Canada), and was named after the Labrador region of that colony.
     It is among the most commonly kept dogs in several countries, particularly in the European world.
    </Subtitle>
      </ParallaxLayer>

          {/* 2ND CARD */}

      <ParallaxLayer offset={1} speed={0.3}>
      <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
      <Card component="li" sx={{ height:'40vh', width: '90vh' }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster={require("../assets/img/golden.png")}
          >
            <source
              src={require("../assets/video/golden_retriever.mp4")}
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent>
          <Typography
            level="body-lg"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Golden Retriever
          </Typography>
        </CardContent>
      </Card>

    </Box>
    <Subtitle style={{color: 'black', paddingRight: '5%'}}>
    The Golden Retriever is a Scottish breed of retriever dog of medium size. It is characterised by a gentle and affectionate nature and a striking golden coat. 
    It is commonly kept as a pet and is among the most frequently registered breeds in several Western countries.
    </Subtitle>
      </ParallaxLayer>

    {/* 3RD CARD */}

      <ParallaxLayer offset={2} speed={0.3}>
      <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
      <Card component="li" sx={{ height:'40vh', width: '90vh' }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster={require("../assets/img/shephard.png")}
          >
            <source
              src={require("../assets/video/german_shephard.mp4")}
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent>
          <Typography
            level="body-lg"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            German Shephard
          </Typography>
        </CardContent>
      </Card>

    </Box>

    <Subtitle style={{color: 'black', paddingRight: '5%'}}>
    The German Shepherd, also known in Britain as an Alsatian, is a German breed of working dog of medium to large size.
     The breed was developed by Max von Stephanitz using various traditional German herding dogs from 1899.
    </Subtitle>
      </ParallaxLayer>

    {/* 4TH CARD */}

      <ParallaxLayer offset={3} speed={0.3}>
      <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
      <Card component="li" sx={{ height:'40vh', width: '90vh' }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster={require("../assets/img/bulldog.png")}
          >
            <source
              src={require("../assets/video/french_bulldog.mp4")}
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent>
          <Typography
            level="body-lg"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            French Bulldog
          </Typography>
        </CardContent>
      </Card>

    </Box>

    <Subtitle style={{color: 'black', paddingRight: '5%'}}>
    The French Bulldog (French: Bouledogue Français) is a French breed of companion dog or toy dog. It appeared in Paris in the mid-nineteenth century,
     apparently the result of cross-breeding of Toy Bulldogs imported from England and local Parisian ratters.
    </Subtitle>
      </ParallaxLayer>

    </Parallax>
  </div>
</ContentSection>


    <ContentSection style={{margin: '4px'}}>
    <TitleDark style={{margin:'2em'}}>Changing Lives, One Tail Wag at a Time</TitleDark>
    <Subtitle style={{color: 'black', marginBottom:'4%'}}>
      At ILoveDogs!, we believe that every dog deserves a loving home. That's why we partner with shelters and rescue organizations to help dogs in need find their forever families. 
      Your donation can make a difference in the life of a homeless dog.
    </Subtitle>
    <CRow>
  <CCol xs={6} md={6} className="mx-auto">
    <CWidgetStatsB
      className="mb-1"
      progress={{ color: 'success', value: 63 }}
      text="The progress bar you see reflects our current fundraising efforts. We're striving to reach our goal of 10000$ to continue providing life-changing care for homeless dogs."
      title="6300$ / 10000$"
      value="63.2%"
    />
  </CCol>
  <CallToAction style={{marginTop:'4%', color:'white'}}><Link to='/donations' style={{color: 'white'}}>Donate</Link></CallToAction>

</CRow>
    </ContentSection>
    </Container>
  );
}

export default Home;