import React from "react";
import {Grid, Card, CardMedia, CardContent, Typography, Button, Box} from "@material-ui/core";
import useStyles from "../../Pages/Home/styles";
import { useSelector } from "react-redux";
import words from "../../leng.json";
import { Link } from 'react-router-dom';

const CategoryDetails = ({name, image, title}) => {
    const classes = useStyles();
    const lengActive = useSelector((state) => state.leng);
    const langWordsActive = words[`${lengActive.lang}`];
    return (
        <>
            <Grid className={classes.paper} item xs={12} sm={6} md={3}>
                <Link to={`category/${name}`} >
                <Card className={classes.root} style={{ height: "100%" }}>
                    <Typography className={classes.cardHeader}>
                    {title}
                    </Typography>
                    <img
                    className={classes.media1}
                    src={image}
                    title={name}
                    alt={name}
                    />
                    <CardContent>
                    <Typography variant="subtitle2" color="#007185">
                        {langWordsActive.seeMore}
                    </Typography>
                    </CardContent>
                </Card>
                </Link>
            </Grid>
        </>
    );
};

export default CategoryDetails;
