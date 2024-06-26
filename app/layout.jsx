import '@styles/globals.css'

export const metadata = {
    title: "Proptopia",
    description:"Discover & Share AI Prompts"
}
const layout = ({children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          {children}
        </main>
      </body>
    </html>
  );
};

export default layout;
