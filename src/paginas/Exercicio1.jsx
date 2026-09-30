import {Link} from "react-router-dom";
import "../App.css";
import { useState } from "react";

export default function Exercicio1()
{    

    const [comprimento,setComprimento] = useState();
    const [largura,setLargura] = useState();
    const [profundidade,setProfundidade] = useState();
    const [resultado,setResultado] = useState();

    function calcular() {

        let volume = Number(comprimento) * Number(largura) * Number(profundidade);
        let litros = Number(volume) * 1000;

        setResultado(
            <td>O volume da piscina é {volume.toFixed(2)} ({litros.toFixed(2)})</td>
        ) 

    }

    return (
        <div>

            <h1>Exercício 1</h1>

            <div className="conteudo">

                <table>
                    <tr>
                        <th>Campo</th>
                        <th>Texto exibido</th>
                        <th>Elemento</th>
                    </tr>

                    <tr>
                        <td>Comprimento</td>
                        <td>Digite o comprimento (em metros)</td>
                        <td><input type="text"
                                    value={comprimento}
                                    onChange={ (e) => setComprimento(e.target.value)} /></td>
                    </tr>

                    <tr>
                        <td>Largura</td>
                        <td>Digite a largura (em metros)</td>
                         <td><input type="text"
                                    value={largura}
                                    onChange={ (e) => setLargura(e.target.value)} /></td>
                    </tr>

                    <tr>
                        <td>Profundidade</td>
                        <td>Digite a profundidade (em metros)</td>
                         <td><input type="text"
                                    value={profundidade}
                                    onChange={ (e) => setProfundidade(e.target.value)} /></td>
                    </tr>

                    <tr>
                        <td>Botão</td>
                        <td>Calcular</td>
                        <td><input type="button"
                               value="Calcular"
                               onClick={calcular} /></td>
                    </tr>

                    <tr>O volume da piscina é {resultado}</tr>
                </table>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}
