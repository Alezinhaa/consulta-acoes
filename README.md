# Consulta Ações - Atividade de faculdade

Este projeto foi desenvolvido para a disciplina de **Usabilidade, Desenvolvimento Web, Mobile e Jogos** do **6° semestre** do curso de Sistemas de Informação da **UNISUL**. A atividade tem como objetivo criar uma aplicação web que consulta informações sobre ações financeiras utilizando uma API pública.

## Descrição

A aplicação permite que o usuário insira o **ticker** de uma ação (ex: `AAPL` para a Apple) e, ao clicar no botão **"Buscar"**, as principais informações sobre a ação serão exibidas. Caso o ticker informado não exista ou haja algum erro na consulta, uma mensagem de erro será exibida na tela.

Além disso, há um efeito visual de "chuva de emojis de dinheiro" 🎉💰 que aparece quando a consulta é realizada com sucesso.

## Funcionalidades

- **Entrada de Ticker**: O usuário pode digitar o ticker de uma ação.
- **Busca de Informações**: Ao clicar no botão "Buscar", a aplicação faz a consulta à API para trazer os dados mais recentes da ação.
- **Exibição de Erro**: Se o ticker informado for inválido ou a API não responder corretamente, uma mensagem de erro será exibida abaixo da barra de pesquisa.
- **Animação**: Ao buscar com sucesso, a tela exibe uma animação de "chuva de emojis de dinheiro" 🎉💰 para tornar a experiência mais divertida.

## Tecnologias Utilizadas

- **React**: Framework JavaScript para construir a interface.
- **API de Ações**: A consulta é feita via API pública **Alpha Vantage** para obter dados financeiros de ações.
- **CSS**: Para estilização da interface e da animação de chuva de emojis.
