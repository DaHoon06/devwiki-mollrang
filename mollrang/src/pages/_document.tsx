import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

const themeInitializerScript = `
      (function () {
        document.body.dataset.theme = window.localStorage.getItem("theme") || (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? "dark" : "light");
      })();
  `;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } catch (e) {
      console.log(e);
    } finally {
      sheet.seal();
    }
  };

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitializerScript }} />
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;