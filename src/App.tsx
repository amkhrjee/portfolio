import viteLogo from "/Boy.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <button
        onClick={() => {
          location.href = "https://bento.me/amkhrjee";
        }}
      >
        @amkhrjee
      </button>
      <h2>Hi, this site is under heavy construction.</h2>
    </>
  );
}

export default App;
