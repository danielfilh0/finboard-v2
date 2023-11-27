<div align="center">
  <img src="src/assets/logo.png">
</div>

<hr>
<br>

# Funcionalidades
- Totais de receitas, despesas, saldos e transações pendentes
- Totais de receitas em gráfico de barra
- Transações em gráficos de linha
- Listagem de transações com filtro por período, nome da empresa, ramo industrial e estado

# Tecnologias utilizadas

## Front-end
- Next.js
- Typescript
- React Hook Form
- Zod
- ChakraUI
- Chart.js
- Phosphor Icons

# Como executar

Antes de tudo, na sua máquina deverá ter:

- Node.js
- Git

Em seguida, execute os comandos abaixo:

```bash
$ cd finboard

$ npm install # ou yarn install

```

Aqui será preciso criar um arquivo `.env` seguindo o exemplo do arquivo `.env.example`.

```bash
$ npm run dev # ou yarn dev
```
# Pontos de melhoria
- Adicionar autenticação com JWT
- Adicionar testes unitários, E2E e de integração
- Trazer mais opções de gráficos com mais possibilidades de informações
- Melhorar o layout (tema, cores, etc)
