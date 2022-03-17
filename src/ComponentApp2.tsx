import React from 'react';
import { useMyContext } from 'app1/MyContext';

const ComponentApp2 = ({prop1}) => {
    const {contextSource} = useMyContext()
    return (
        <div style={{fontSize: '20px'}}>
            ComponentApp2 prop1 {prop1} <td/>
            Context source {contextSource}
        </div>
    )
}

export default ComponentApp2