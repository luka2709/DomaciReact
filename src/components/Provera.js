import ProveraInput from "./ProveraPostojeci";


function Provera(){

    const igraci=[ 
         {ime: 'Marek', prezime: 'Brazda', nickname: 'Humanoid', status:'Igrac vec ima tim!' },
         {ime: 'Elias', prezime: 'Lipp', nickname: 'Upset', status:'Igrac vec ima tim!' },
         {ime: 'Zdravets', prezime: 'Galabov', nickname: 'Hylissang', status:'Igrac vec ima tim!' },
         {ime: 'Ivan', prezime: 'Diaz', nickname: 'Razork', status:'Igrac vec ima tim!' },
         {ime: 'Martin', prezime: 'Hansen', nickname: 'Wunder', status:'Igrac vec ima tim!' },
         {ime: 'Martin', prezime: 'Larsson', nickname: 'Rekkles', status:'Igrac vec ima tim!' },
         {ime: 'Gabriel', prezime: 'Rau', nickname: 'Bwipo', status:'Igrac vec ima tim!' },
         {ime: 'Oskar', prezime: 'Boderek', nickname: 'Selfmade', status:'Igrac vec ima tim!' },
         {ime: 'Paul', prezime: 'Boyer', nickname: 'Soaz', status:'Igrac vec ima tim!' },
     ]

    return(
        <div>
            <ProveraInput igraci={igraci}/>
        </div>
    );
}
export default Provera;

