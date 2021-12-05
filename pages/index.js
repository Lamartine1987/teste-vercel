import {useState} from 'react';

function Home(){
    return (
        <div>
            <h1>Home</h1>
            <Contador />
            <h2>Deu certo</h2>
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