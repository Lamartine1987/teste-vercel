import {useState} from 'react';

function Home(){
    return (
        <div >
            <div class='div1'>
                <h2>Dominó dos Campeões</h2>
            </div>
            
            <div class='div2'>
                <div class='div3'>
                    <div class='lama'>
                    <h3>Lamartine Cezar..................</h3>
                    <h3>6 Buchudas</h3>
                    </div>
                    
                    <div class='petrus'>
                        <h3>Petrus Felipe..................</h3>
                        <h3>0 Buchudas</h3>
                    </div>
                    
                    <div class='bia'>
                    <h3>Beatriz Salvador..................</h3>
                    <h3>0 Buchudas</h3>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

function Contador(){
    const [contador, setcontador] = useState(1);

    function adiconarContador(){
        setcontador(contador +1);
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={adiconarContador} >Adicionar</button>
        </div>
    )
}

export default Home