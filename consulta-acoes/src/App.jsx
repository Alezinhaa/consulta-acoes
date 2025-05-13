import React, { useState } from 'react';
import StockInfo from './components/StockInfo'; // Componente que mostra os dados da ação
import MoneyRain from './components/MoneyRain'; // Componente com efeito visual (chuva de dinheiro)
import './App.css'; // Estilos

function App() {
  // Estados principais
  const [symbol, setSymbol] = useState('');         // Ticker digitado pelo usuário (ex: AAPL)
  const [stockData, setStockData] = useState(null); // Dados retornados da API
  const [loading, setLoading] = useState(false);    // Exibe "Buscando..." no botão
  const [error, setError] = useState('');           // Armazena mensagem de erro
  const [showMoneyRain, setShowMoneyRain] = useState(false); // Controla o efeito da chuva

  const API_KEY = 'J9NPWGS1OGYKYLRY'; // Chave de acesso à API Alpha Vantage

  // Função que busca os dados da ação usando a API
  const fetchStockData = async () => {
    if (!symbol.trim()) {
      setError('Digite um símbolo (ex: AAPL)');
      return;
    }

    // Reseta estado antes da busca
    setLoading(true);
    setError('');
    setStockData(null);
    setShowMoneyRain(false);

    try {
      // Faz requisição à API Alpha Vantage
      const response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
      );
      const data = await response.json();

      const quote = data['Global Quote'];

      // Verifica se retornou dados válidos
      if (quote && Object.keys(quote).length > 0) {
        setStockData(quote);
        setShowMoneyRain(true); // Ativa o efeito visual
      } else {
        setError('Ação não encontrada ou limite da API atingido.');
      }
    } catch (err) {
      setError('Erro na conexão com a API.');
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  return (
    <div className="app">
      <h1>Consulta de Ações</h1>

      {/* Campo de busca + botão */}
      <div className="search-box">
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())} // Transforma em letras maiúsculas
          placeholder="Ex: AAPL, MSFT, GOOGL"
          disabled={loading}
        />
        <button onClick={fetchStockData} disabled={loading || !symbol.trim()}>
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </div>

      {/* Exibe mensagem de erro se necessário */}
      {error && <p className="error">{error}</p>}

      {/* Componente com chuva de dinheiro */}
      <MoneyRain trigger={showMoneyRain} />

      {/* Componente que mostra os dados da ação */}
      {stockData && <StockInfo data={stockData} />}
    </div>
  );
}

export default App;
