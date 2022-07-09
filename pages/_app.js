import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      theme={{
        colors: {
          primary: [
            '#ddfef0',
            '#b6f5dc',
            '#8deec9',
            '#62e6b9',
            '#39dfaa',
            '#20c696',
            '#139a6c',
            '#066e46',
            '#004324',
            '#001809',
          ],
          secondary: [
            '#ffe9ec',
            '#ffe9ec',
            '#edc8cc',
            '#dba6aa',
            '#c98285',
            '#b86060',
            '#9f474d',
            '#7d3640',
            '#5a2631',
            '#381620',
            '#1b040b',
          ],
        },
        primaryColor: 'primary',
        secondaryColor: 'secondary',
        loader: 'bars',
        dateFormat: 'DD/MM/YYYY',
      }}
      withGlobalStyles
      withNormalizeCSS
      emotionOptions={{ key: 'mantine' }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
