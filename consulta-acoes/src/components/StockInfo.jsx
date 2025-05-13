import React from 'react';

const StockInfo = ({ data }) => {
  // Verifica se os dados necessários existem antes de continuar
  if (!data || !data['01. symbol'] || !data['10. change percent']) {
    return <p className="error">Dados inválidos ou incompletos. Verifique o ticker informado.</p>;
  }

  // Define a cor com base na variação percentual (verde para positivo, vermelho para negativo)
  const changeColor = data['10. change percent'].startsWith('+') ? '#4CAF50' : '#F44336';

  return (
    <div className="stock-card">
      <h2>{data['01. symbol']}</h2>
      <p><strong>Preço:</strong> ${data['05. price']}</p>
      <p>
        <strong>Variação:</strong>
        <span style={{ color: changeColor }}> {data['10. change percent']}</span>
      </p>
      <p><strong>Últ. fechamento:</strong> ${data['08. previous close']}</p>
    </div>
  );
};

export default StockInfo;
