import React, { useState } from "react";

export default function Heritage(){
    const[defaultAccount,setDefaultAccount] = useState('Kullanıcı');
    const[defaultRemainingTime,setDefaultRemaininTime] = useState('0 gün');
    const[defaultAmount,setDefaultAmount] = useState('0');

    return(
        <div>
            <br/><br/><br/><br/>
            <h1>Merhaba, {defaultAccount}</h1><br/><br/><br/>
            <p>Aktarımın gerçekleşmesine {defaultRemainingTime} kaldı.</p><br/><br/><br/>
            <p>{defaultAmount}</p>
        </div>
    )
}