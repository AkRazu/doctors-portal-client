import React from 'react';
import NotIMG from '../../assets/images/dribbble_1.gif'
const NotFound = () => {
    return (
        <div className='flex justify-center bg-base-100'>
            <img className='w-auto h-fit'  src={NotIMG} alt="not found" />
        </div>
    );
};

export default NotFound;