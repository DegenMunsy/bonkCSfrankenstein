import Home from './Home';

// Default styles that can be overridden by your app

require("@solana/wallet-adapter-react-ui/styles.css");

const App = () => {
    return (
    <>
      <div>
        <Home />
      </div>
    </>
  );
};

export default App;
