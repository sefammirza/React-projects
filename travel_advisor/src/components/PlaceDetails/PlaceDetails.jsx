import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn"
import PhoneIcon from "@material-ui/icons/Phone"
import Rating from "@material-ui/lab/Rating"

import useStyles from "./styles"

const PlaceDetails = ({place}) => {
    return (
        <Card elevation={6}>
            <CardMedia
            style={{height:350}}
            image={place.photo ? place.photo.images.large.url : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imgacademy.com%2Fabout-img-academy&psig=AOvVaw07nAcOtR644JHRDxVEOdS9&ust=1646432962301000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKD3nPH-qvYCFQAAAAAdAAAAABAD'}
            title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {place.name}
                </Typography>
                <Box display='flex' justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default PlaceDetails;