import React from 'react'
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Skeleton from '@mui/material/Skeleton';

export default function ButtonPrinter() {

    function printCoco() {
        document.getElementById("coco").innerHTML = "🥥 COCONUTS 🥥";
    }

    function deleteCoco() {
        document.getElementById("coco").innerHTML = "";

    }

    return (
        <>
            <Button
                variant="contained"
                sx={{
                    color: "aqua",
                }}
                onClick={() => { printCoco() }}
            >Show Me Coconuts 🥥</Button>

            <IconButton
                aria-label='delete'
                sx={{
                    color: 'rgb(24, 203, 144)'
                }}
                onClick={() => { deleteCoco() }}
            ><DeleteIcon /></IconButton>

            <div id='box'>
                <Skeleton
                    id="coco"
                    sx={{
                        bgcolor: 'rgb(127, 255, 212, 0.855)                        ' }}
                    variant = "rounded"
                    animation="wave"
                        />
            </div>
        </>
    )
}
