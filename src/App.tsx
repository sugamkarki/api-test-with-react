import React, { useState, useEffect } from "react";
import "./App.css";
import Loading from "./components/loading/Loading";
import CardView from './components/CardLayout/CardLayout.component'
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    const promise = await fetch(
      "https://www.breakingbadapi.com/api/characters"
    );
    const lcData = await promise.json();
    setData(lcData);
    setLoading(false);
  };
  //@ts-ignore
  useEffect(() => {
    return fetchData();
  }, []);
  return <div className="App">
    {loading ? <Loading /> : (
      <CardView data={data}/>
    )}
    
    </div>;
}

export default App;
