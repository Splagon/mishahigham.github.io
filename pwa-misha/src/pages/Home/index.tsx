//import { useState } from 'react'
import './index.css'
import mah_logo_no_bg_black_border from '@assets/mah_logo_no_bg_black_border.png'

function Home() {
    return (
        <div className='flex'>
            <div className='flex flex-col gap-3 items-center'>
                <img src={mah_logo_no_bg_black_border} alt="MAH" className='logo pb-10'></img>
                <p className="font-['playfair'] font-medium italic text-4xl">hi i am</p>
                <h1 className="font-['playwrite']">Misha Higham</h1>
            </div>
        </div>
    )
}

export default Home

