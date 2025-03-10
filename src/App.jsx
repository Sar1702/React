import { useState } from "react";
import "./App.css";

function App() {
  const[color,setcolor] = useState('olive')
  return (
    <div className="w-full h-screen duration-200 bg-white flex items-center justify-center"style={{backgroundColor: color}}>
      <div className="fixed flex justify-center bottom-12 left-0 right-0 px-2">
        <div className="flex justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-red-300 hover:bg-red-500 "
          onClick={()=> setcolor('red')}
          >
           RED
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-green-300 hover:bg-green-500
          "onClick={()=> setcolor('green')}>
           GREEN
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-blue-300 hover:bg-blue-500"
          onClick={()=> setcolor('blue')}>
           BLUE
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-purple-300 hover:bg-purple-500"
          onClick={()=> setcolor('purple')}>
           PURPLE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
