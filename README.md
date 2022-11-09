This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Anotações gerais:

Next: framework que utiliza React (que cria interfaces)

React: Maneira de dividir a aplicação em várias interfaces. Ou seja, vários componentes distribuídos que juntos formam a minha aplicação.
Ex: No twitter o like, comment e share são iguais para cada publicação. O que seria mais difícil de fazer apenas com HTML.

Quando usamos um Next ele possui um servidor Node embutido. Mesmo com o JS desabilitado, já que a interface da aplicação foi construída pelo Server Side Handle. Ou seja, quando o Google acessa nossa aplicação ela já vem construída e necessita apenas ser carregada.

## Solução CSS

npm i -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

## Vatagens

Ao utilizar o tailwind deiminuimos a troca entre HTML e CSS, aumetando a produtividade, ou seja, quando desejo mudar a estilização de um elemento, eu apenas procuro-o e faço as modificações lá dentro. Diferente de quando temos o HTML e CSS

## Biblioteca para fazer chamadas HTTP

npm i axios

## Estados:

Variáveis que serão manipuladas pelo componente
