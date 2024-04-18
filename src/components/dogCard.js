import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import PropTypes from 'prop-types';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import { useSpring, animated } from '@react-spring/web';

export default function DogCard({ name, img, origin, url, weight, height, metaheight, metaweight}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    if (weight === undefined) {
        weight = metaweight;
    }

    if (height === undefined) {
        height = metaheight;
    }

    if (height === "Not available") {
        height = '34-76 cm'
    }

    if (weight === "Not available") {
        weight = '7-45 kg'
    }

    return (
        <Card sx={{ 
            maxWidth: 345,
            marginLeft: '12%'
        }}>
            <CardActionArea onClick={handleOpen}>
            <CardMedia
                component={'img'}
                alt={name}
                height={160}
                image={img}
                title={name}
                sx={{ 
                    height: "180px",
                    objectFit: 'fill',
                }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {origin}
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small"><a href={ url }>wiki</a></Button>
            </CardActions>
            <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: StyledBackdrop }}
      >
        <Fade in={open}>
          <ModalContent sx={style}>
            <div style={{display:"flex", alignContent: "center", alignItems: "center", textAlign: "center"}}>
                <img src= {img} alt='dog' style={{width: '30vh', height: '30vh'}}/>
            </div>
            <div>
            <h2 id="spring-modal-title" className="modal-title">
              {name}
            </h2>
            <span id="spring-modal-description" className="modal-description">
                <b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis. <br />
              <b>Weight: </b> {weight} <br />
              <b>Height: </b> {height} <br />
              <b>Origin: </b> {origin} <br />
              <a href={url}>More info</a>

            </span>
            </div>
          </ModalContent>
        </Fade>
      </Modal>
        </Card>
    );
}

const Backdrop = React.forwardRef((props, ref) => {
    const { open, ...other } = props;
    return <Fade ref={ref} in={open} {...other} />;
  });
  
  Backdrop.propTypes = {
    open: PropTypes.bool.isRequired,
  };
  
  const Modal = styled(BaseModal)`
    position: fixed;
    z-index: 1300;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  
  const StyledBackdrop = styled(Backdrop)`
    z-index: -1;
    position: fixed;
    inset: 0;
    background-color: rgb(0 0 0 / 0.5);
    -webkit-tap-highlight-color: transparent;
  `;
  
  const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter(null, true);
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited(null, true);
        }
      },
    });
  
    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
  });
  
  Fade.propTypes = {
    children: PropTypes.element.isRequired,
    in: PropTypes.bool,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
  };
  
  const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
  
  const style = {
    position: 'absolute',

    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
  };
  
  const ModalContent = styled('div')(
    ({ theme }) => css`
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 500;
      text-align: start;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 8px;
      overflow: hidden;
      background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border-radius: 8px;
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      box-shadow: 0 4px 12px
        ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
      padding: 24px;
      color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};
  
      & .modal-title {
        margin: 0;
        line-height: 1.5rem;
        margin-bottom: 8px;
      }
  
      & .modal-description {
        margin: 0;
        line-height: 1.5rem;
        font-weight: 400;
        color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
        margin-bottom: 4px;
      }
    `,
  );
  