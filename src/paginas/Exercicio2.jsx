import {Link} from "react-router-dom";
import "../App.css";
import { useState } from "react";

export default function Exercicio2()
{    

    const [nome,setNome] = useState();
    const [preco,setPreco] = useState();
    const [quantidade,setQuantidade] = useState();

    const [produtos,setProdutos] = useState([]);

        function adicionar() {

        const novo = {nome : nome, preco : preco, quantidade : quantidade};

        setProdutos([...produtos,novo]);

        setNome("");
        setPreco("");
        setQuantidade("");

        }

        function excluir(index) {

        setProdutos(produtos.toSpliced(index, 1));

        }

    return (
        <div>

            <h1>Exercício 2</h1>

            <div className="conteudo">

                <p>
                    Digite o nome do produto: <br/>
                    <input type="text"
                           value={nome}
                           onChange={ (e) => setNome(e.target.value)} />

                    Digite o preço: <br/>
                    <input type="number" step={0.01}
                           value={preco}
                           onChange={ (e) => setPreco(e.target.value)} />

                    Digite a quantidade: <br/>
                    <input type="number"
                           value={quantidade}
                           onChange={ (e) => setQuantidade(e.target.value)} />
                </p>

                 <p>
                        <input type="button"
                               value="Adicionar"
                               onClick={adicionar} />
                    </p>

                <table>

                    <tr>

                        <th> Nome do Produto</th>
                        <th> Quantidade</th>
                        <th> Preço</th>
                        <th> Total</th>
                        <th>      </th>

                    </tr>

                    

                    {produtos.map(
                        (produto,index) => (
                            <tr>
                                <td>{produto.nome}</td>
                                <td>{produto.preco}</td>
                                <td>R${produto.quantidade}</td>
                                <td>R${produto.preco*produto.quantidade}</td>
                                <td>
                                    <a href="#" onClick={() => excluir(index)}>Excluir</a>
                                </td>
                            </tr>
                        )
                    )}

                </table>
  
                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}
