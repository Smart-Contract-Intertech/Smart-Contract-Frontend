import "./newtransfer.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";

const NewTransfer = ({ inputs, title }) => {
    const [defaultName,setDefaultName]=useState("");
    const [defaultAddress,setDefaultAddress]=useState("");
    const [defaultAmount,setDefaultAmount]=useState("");
    const [defaultDate,setDefaultDate]=useState("");

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <p>{defaultName}</p>
                        <p>{defaultAddress}</p>
                        <p>{defaultAmount}</p>
                        <p>{defaultDate}</p>
                    </div>
                    <div className="right">
                        <form>
                                <div className="formInput" key="">
                                    <label>İsim:</label>
                                    <input type="text" value={defaultName} onChange={(e)=>setDefaultName(e.target.value)}></input>
                                    <br/>
                                    <br/>
                                    <label>Cüzdan Adresi:</label>
                                    <input type="text" value={defaultAddress} onChange={(e)=>setDefaultAddress(e.target.value)}></input>
                                    <br/>
                                    <br/>
                                    <label>Miktar:</label>
                                    <input type="text" value={defaultAmount} onChange={(e)=>setDefaultAmount(e.target.value)}></input>
                                    <br/>
                                    <br/>
                                    <label>Tarih:</label>
                                    <input type="date" value={defaultDate} onChange={(e)=>setDefaultDate(e.target.value)}></input>
                                    <br/>
                                    <br/>
                                </div>
                        </form>
                        {/*<form>
                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                <label>{input.label}</label>
                                <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
                            <button value={defaultName} onChange={(e)=>setDefaultName(e.target.value)}>Gönder</button>
                        </form>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewTransfer;