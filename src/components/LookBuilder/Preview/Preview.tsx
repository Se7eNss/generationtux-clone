import React, { useState } from 'react'
import './preview.css'
import JacketAndPants from './parts/jacket-and-pants/JacketAndPants'
import Shirt from './parts/shirt/Shirt'
import Tie from './parts/tie/Tie'
import Shoe from './parts/shoes/Shoe'
import Socks from './parts/socks/Socks'
import VestAndCummerbund from './parts/vest-and-cummebund/VestAndCummerbund'
import Belt from './parts/belt/Belt'
import { useDispatch, useSelector } from "react-redux";
import { changebigPreivew} from '../../../slices/jacket';
import { TStore } from '../../../store'

const Preview = () =>  {
    const { look } = useSelector((state: TStore) => state.jacketReducer)
    const handleClick=()=>{
        dispatch(changebigPreivew({bigPreview:true}))
    }
    const dispatch =useDispatch();
    return (
        <div className={look ? ('col-lg-6'):('col-lg-5')}>
            <div className="img-wrapper " onClick={handleClick}>
                <JacketAndPants />
                <Shirt/>
                <Tie/>
                <Shoe/>
                <Socks/>
                <VestAndCummerbund/>
                <Belt/>
            </div>
         </div>
    )
}

export default Preview
