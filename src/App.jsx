import "./App.css";
import { FaCat } from "react-icons/fa";

function App() {
  return (
    <div className="w-screen h-screen bg-[#f595ec] overflow-hidden">
      <header className="bg-[#f3f3f3] ">
        <div className="w-full flex justify-center items-center p-2.5">
          <FaCat className="w-[20px] h-[20px] text-[#701770]" />
          <p className="mr-2 ml-2 text-[#701770] text-[20px] font-bold">
            DudaSys
          </p>
          <FaCat className="w-[20px] h-[20px] text-[#701770]" />
        </div>
      </header>
      <main className="w-full h-full flex justify-center items-center">
        <div className="w-[320px] p-8 bg-amber-50 rounded-xl">
          <div className="flex justify-center mb-2">
            <h1 className="text-[18px] font-bold">Entrar na sua conta</h1>
          </div>
          <form
            className="flex items-start flex-col"
            action="https://getform.io/f/bolodlya"
            method="POST"
          >
            <input
              className="p-2 mb-1 w-full border-2 border-[#808080] rounded-[5px] focus:outline-[#ad2fad]"
              type="email"
              name="email"
              placeholder="Digite o email"
            />
            <input
              className="p-2 mb-1 w-full border-2 border-[#808080] rounded-[5px] focus:outline-[#ad2fad]"
              type="password"
              name="senha"
              placeholder="Digite a senha"
            />
            <button className="p-2 mt-2 ml-auto mr-auto w-full bg-[#770B91] text-white font-[20px] rounded-[5px] hover:bg-[#560873] cursor-pointer focus:outline-[2px] focus:outline-offset-2 focus:outline-[#560873]">
              Entrar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
