import {useState} from 'react';
import {IMaskInput}from 'react-imask';

import styles from './Formulario.module.less';

const Formulario = (props) => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState ('');
    const [resultado, setResultado] = useState(null);
    const [classificacao, setClassificacao] = useState('');


    const calcularImc = (evento) => {
        evento.preventDefault();

        const imc = peso / (altura * altura);
        setResultado(imc.toFixed(2));
        setClassificacao(classificarImc(imc));
        };

    const classificarImc = (imc) => {
        if (imc < 18.5) return 'Abaixo do peso';
        if (imc < 24.9) return 'Peso normal';
        if (imc < 29.9) return 'Sobrepeso';
        if (imc < 34.9) return 'Obesidade grau 1';
        if (imc < 39.9) return 'Obesidade grau 2';
        return 'Obesidade grau 3 (mórbida)';
    };

    return (
    <>
        <form onSubmit={calcularImc}>
            <label> Digite sua altura (em metros)</label>
            <IMaskInput
                mask="0.00"
                radix=","
                value={altura || ''}
                onAccept={(value) => setAltura(value)}
                overwrite
            />
            <label>Digite seu peso</label>
            <IMaskInput
                mask="000.0"
                radix=","
                value={peso || ''}
                onAccept={(value) => setPeso(value)}
                overwrite
            />
            <button type="submit">Calcular</button>
        </form>        
        
        {resultado && (
            <table>
            <thead>
                <tr>
                    <th colSpan="2"> IMC</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="colunaInfo">
                        O seu IMC é: 
                    </td>
                    <td className="colunaResultado">
                        {resultado}
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td className="colunaInfo">
                        Sua classificação é:
                    </td>
                    <td className="colunaResultado">
                        {classificacao}
                    </td>
                </tr>
            </tfoot>
        </table>
        )}
    </>
    )     
}

export default Formulario