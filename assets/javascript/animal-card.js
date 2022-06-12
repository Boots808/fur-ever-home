import React, { useState } from "react";
import{
    CardMedia,
    Grid,
    Card,
    CardActionArea,
    CardHeader,
    CircularProgress,
} from "material-ui/core";

import PetsIcon from "@material-ui/icons/Pets";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    card: {
        backgroundColor: theme.palette.primary.main,
    },
    image:{
        height:400,
        [theme.breakpoints.up("lg")]{
            height:250,
        },
    },
}));

const AnimalCard = (props) => {
    const { result } = props;
    const classes = useStyles();
    const [imageLoading, setImageLoading] = useState(true);
    let ImageComponent;
}