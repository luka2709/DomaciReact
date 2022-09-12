import { useState } from "react";


function ProveraInput(props){

    const [nickname, setNickname]= useState('');
    const [status, setStatus]= useState('');

    
    function handleNickname(e){
        setNickname(e.target.value);
    }
    
    function proveri(e){
        var element= props.igraci.filter(function(p){
            return p.nickname === nickname;
        })
        if(element.length !==0){
            alert('Status: ' + element[0].status);
        }
        else{
            alert('Status: ' + 'Nije Vam dodeljen tim! ');
            
        }
    }

    const design = { margin: 10, borderStyle: "" };
return (
    <div>
            <div className="card" style={design}>
      <img
        className="card-img-top"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/LOL_Worlds_logo.svg/640px-LOL_Worlds_logo.svg.png"
        
        alt="Neka slika"
      /></div>

        <div className="element-forme">
            <h6>Unesite Vaš nickname: </h6>
            <input type={'text'} className="inputProvera" value={nickname} onChange={handleNickname}></input>
            <button type="button" onClick={proveri} className="dugme_za_proveru" vaule={nickname}>Proveri status prijave</button>
            
        </div>
    </div>
);
}

export default ProveraInput;