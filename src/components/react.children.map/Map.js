
import React from "react";
 

export default function MapChildren({children}){
    const mapped = React.Children.map(children,(child,index)=>{
       return (  <div key={index} className="mapped-child">
            {child}
        </div>)
    })
    return <div className="mapped-child-wrap">
        {mapped}
    </div>
}