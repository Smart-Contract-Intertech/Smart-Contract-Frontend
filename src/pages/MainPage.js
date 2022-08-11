import main1 from './image/main1.png';
import main2 from './image/main2.png';
import main3 from './image/main3.png';
import main4 from './image/main4.png';
import main5 from './image/main5.png';
import main6 from './image/Vector.png'
import metamask from './image/metamask.png'
import Container from 'react-bootstrap/Container';
import './MainPage.css';
import {ethers} from 'ethers';
import react, {useState} from 'react';

export default function MainPage(){
    const contractAddress = '0x5A86858aA3b595FD6663c2296741eF4cd8BC4d01';

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [connectButtonText, setConnectButtonText] = useState('Metamask Cüzdanı\n ile Bağlan');
    const [currentContractVal, setCurrentContractVal] = useState(null);

    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [contract, setContract] = useState(null);

    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
    }

    const connectWallet = () => {
        if(window.ethereum){
            window.ethereum.request({method: 'eth_requestAccounts'}).then(result => {
                accountChangedHandler(result[0]);
                setConnectButtonText('Cüzdan Bağlandı');
            })
        }
        else{
            setErrorMessage('You need to install Metamask');
            throw new Error('You need to install Metamask');
        }
    }
    return(
        <Container style ={{fontFamily:'sans-serif-medium', fontSize:26}}>
            <br/><br/><br/><p>Mirasınızı güvence altına alın..</p><br/><br/><br/><br/><br/>
            <p>Metamask cüzdanınızı bağlayın.</p><br/><br/>
            <img 
                src={main1} 
                alt="" 
                width="400" 
                height="100"
            /><br/><br/><br/>
            <p>Mirasçılarınızı belirleyin.</p><br/><br/>
            <img
                src={main2}
                alt=""
                width="175"
                height="200"
            /><br/><br/><br/>
            <p>Size en uygun aktarım tarihini seçin.</p><br/><br/>
            <img
                src={main3}
                alt=""
                width="125"
                height="125"
            /><br/><br/><br/>
            <img src={main6} alt="" width="20" height="20" style={{display:"inline"}}></img><p style={{display:"inline"}}> Ve işlemi onaylayın.</p><br/><br/>
            <img
                src={main4}
                alt=""
                width="125"
                height="175"
            /><br/><br/><br/>
            <p>MOIRA dağıtık etheryum ağıyla mirasınızı merkezi bir kurum olmadan <br/><br/> belirlediğiniz tarihte belirlediğiniz cüzdana güvenle sizin için aktarsın.</p><br/><br/>
            <img
                src={main5}
                alt=""
                width="350"
                height="350"
            /><br/><br/><br/>
            <button style={{color:'white', backgroundColor:'#9980EC'}} onClick={connectWallet}><p style={{display:"inline"}}>{connectButtonText}</p>
            <img src={metamask} alt="metamask" width="40" height="40" style={{display:"inline"}}></img></button><br/><br/><br/>
        </Container>
    )
}