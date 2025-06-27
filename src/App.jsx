import "./App.css";

function App() {
  return (
    <>
      <div className="bg-blue-800 border-[2px] border-red-600">
        <button className="p-5">
          <a href="#" className="text-green-300 underline font-bold">
            Hello world!
          </a>
        </button>
      </div>
      <div className="w-screen mt-40 flex justify-center items-center ">
        <button className="text-gray-100 rounded-[10px] bg-indigo-700 font-bold pr-4 pl-4 pt-2 pb-2 hover:bg-indigo-400">
          Me Clique
        </button>
      </div>
    </>
  );
}

export default App;
