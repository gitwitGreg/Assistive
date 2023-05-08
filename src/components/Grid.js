import React from "react";
import {Typography, makeStyles} from '@material-ui/core'
import Button from "../components/Button.css";

const styles = makeStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 5rem - 5rem'
    },
    item: {
        paddingTop: '1rem'
    }
})


function Grid(props){
    const {icon, title, btntTitle} = props;
    const classes = styles();
    return(
        <div className={classes.wrapper}>
            <div className={classes.item}>{icon}</div>
            <Typography className={classes.item} variant = 'h5'>{title}</Typography>
            <div className={classes.item}>
                <Button txt={btntTitle}/>
            </div>
        </div>
    )
}
export default Grid;