/* Arquivo global, todas as páginas irão carregar esse aquivo aqui*/
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
