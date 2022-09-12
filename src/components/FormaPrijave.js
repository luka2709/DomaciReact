import { useState } from "react";

function FormaPrijava(props){

    const [ime, setIme]= useState('');
    const [prezime, setPrezime]= useState('');
    const [nickname, setNickname]= useState('');


    function handleIme(e){
        setIme(e.target.value);
    }

    function handlePrezime(e){
        setPrezime(e.target.value);
    }   

    function handleNickname(e){
        setNickname(e.target.value);
       
    }

    return (
        <div>
            <h2>{props.naslov}</h2>
            <form className="forma-prijava">
                <div className="element-forme">
                    <label>Ime: </label>
                    <input type={'text'} className="input_prijava" value={ime} onChange={handleIme}></input>
                </div>
                <div className="element-forme1">
                    <label>Prezime: </label>
                    <input type={'text'} className="input_prijava" value={prezime} onChange={handlePrezime}></input>
                </div>
                <div className="element-forme2">
                    <label>Nickname: </label>
                    <input type={'text'} className="input_prijava" value={nickname} onChange={handleNickname}></input>
                </div>
                <button type="submit" onClick={()=>props.funkcija(ime,prezime,nickname)} className="dugme_prijava" value={nickname} onChange={nickname} >Prijavi se na turnir</button>

            </form>
        </div>
        
    );

}
export default FormaPrijava;