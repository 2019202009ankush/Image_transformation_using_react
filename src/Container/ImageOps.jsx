import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export default class ImageOpsContainer extends React.Component {
   
    constructor(props) {
        super(props);
        
        this.state = {
            transforms: []
        }
    }


    render() {

        

        return (
            <Container  maxWidth="md">
                <Grid item xs={6}>
    <Card>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                Input image
            </Typography>
            <Image publicId="leena" cloudName="rakesh111" >
            </Image>
        </CardContent>
    </Card>
</Grid>
<Grid item xs={6}>
    <Card>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                Output Image
            </Typography>
            <Image publicId="leena" cloudName="rakesh111" >
                {this.getTransformations()}
            </Image>
        </CardContent>
    </Card>
</Grid>

            </Container>
        )
    }
}
                 