import '../public/style.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>

      <Component {...pageProps} />
    </>
  );
}
