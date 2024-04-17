import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function DogCard({ name, img, origin, url }) {



    return (
        <Card sx={{ 
            maxWidth: 345,
            margin: '3%'
        }}>
            <CardActionArea>
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
        </Card>
    );
}