import FormaPrijava from "./FormaPrijave";

function Prijava(){

    function PrijaviSe(ime, prezime, nickname){
        alert('Poštovani/a ' + ime + ' ' + 'uspešno ste se prijavili na nas turnir!'+ ' ' +
        'Molimo Vas proverite status vase prijave!');

    }

    return (
        <div>
            <FormaPrijava naslov='Prijavite se na turnir!' funkcija={PrijaviSe}/>
        </div>
        
    );
}
export default Prijava;