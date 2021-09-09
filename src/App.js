import './App.css';
import useStorage from './hooks/storage';
import { useState } from 'react';

function App() {
  const { data, deleteName } = useStorage({
    initData: ["Huyen", "Hoa", "Hung", "Long"]
  })
  const [name, setName] = useState("");
  return (
    <div className="App">
      <div>学生一覧: [{data}]</div>
      <div>削除してください</div>
      <div>削除したい名前:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        <button type="button" onClick={() => deleteName(name)}>
        確定
        </button>
      </div>
      <div>削除したい名前: {name}</div>

      <div>新しい一覧: {data}</div>
    </div>
  );
}

export default App;
