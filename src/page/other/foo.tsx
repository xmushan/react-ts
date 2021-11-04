import React, { Suspense,useRef } from 'react';
const OtherComponent = React.lazy(() => import('./otherCom'));

interface ThingsProps {
    things: string[];
    [propName: string]: any
}

interface bar {
    message: string
}


const Demo: React.FC<bar> = (props: bar) => {
    return (
        <div>{props.message}</div>
    )
}


function Foo() {
    return (
        <div>
            <Demo message='13'/>
        </div>
    )
}

export default Foo