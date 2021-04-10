import React from 'react';
import Band from './Band';


const Bands = props => {
    console.log(props.bands);
    const bands = props.bands.map(band => <Band deleteBand={props.delete} key={props.id} band={band} />)



    return(
    <div>
        {bands}
    </div>
    );
}
 


export default Bands;