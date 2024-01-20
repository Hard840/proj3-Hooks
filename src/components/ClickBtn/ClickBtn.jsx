// import React, { useState } from 'react';
// import './click.css'
// const ClickBtn = () => {
//     const [clicked, setClick] = useState(false)
//     const ClickMe = ()=>{
//       setClick(!clicked)
//     }
//     const blockClassName = clicked ? 'clickBlock blockActive' : 'clickBlock'
    
//     return (
//         <div className={blockClassName}>
//             <button onClick={ClickMe}>Click me{clicked}!</button>
//         </div>
//     );
// }

// export default ClickBtn;
import React, { useState } from 'react';

const ClickBtn = () => {
    const [num, Setnum]= useState(0)
   const clickcount=()=>{
    Setnum(num+1)
} 
 
   const minuscount=()=>{
    Setnum(num-1)
} 
 
    return (
        <div>
            <h1>Count: {num}</h1>
            <button onClick={clickcount}>+</button>
            <button onClick={minuscount}>-</button>

        </div>
    );
}

export default ClickBtn;
