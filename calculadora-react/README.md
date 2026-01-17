# Calculadora React

Uma calculadora simples e funcional construída com React e Next.js.

## Funcionalidades

- ✅ Operações básicas (soma, subtração, multiplicação, divisão)
- ✅ Números decimais
- ✅ Porcentagem
- ✅ Inverter sinal (positivo/negativo)
- ✅ Deletar último dígito
- ✅ Limpar tudo
- ✅ Operações encadeadas

## Tecnologias

- React 19.2.3
- Next.js 16.1.1
- Tailwind CSS 4

## Como Rodar

### Requisitos
- Node.js 18+
- npm

### Instalação

```bash
cd calculadora
npm install
```

### Rodar em desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para produção

```bash
npm run build
npm start
```

## Estrutura do Projeto

```
src/app/
├── body/
│   └── body.jsx          # Componente principal com a lógica
├── Button/
│   └── button.jsx        # Componente de botão reutilizável
├── Input/
│   └── input.jsx         # Componente do display
├── page.jsx              # Página principal
├── layout.jsx            # Layout padrão
└── globals.css           # Estilos globais
```

## Como Funciona

A calculadora mantém 3 estados principais:

- `display`: O número mostrado na tela
- `firstNumber`: O primeiro número da operação
- `operation`: A operação selecionada (+, -, ×, ÷)

Quando você clica em um botão, uma função é chamada que atualiza esses estados.

## Exemplo de Uso

```
Digita 5 → display = "5"
Clica +  → firstNumber = 5, display = "0"
Digita 3 → display = "3"
Clica =  → display = "8"
```

## Licença

MIT
