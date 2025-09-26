import { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Survices from './components/Survices/Survices';
import History from './components/history/History';
const ticketId = async () => {
  const res = await fetch('Tickets.json');
  return res.json();
};

function App() {
  const ticketPromise = ticketId();
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Suspense fallback={<h2>Tickets Is Loading</h2>}>
        <Survices ticketsPlan={ticketPromise}></Survices>
      </Suspense>
      <History></History>
    </>
  );
}

export default App;
