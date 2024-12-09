import { useState } from 'react';
import Button from './components/Button';

function App() {

  const [count, setCount] = useState<number>(0)

  const incrementCount = () => {
    setCount(prev => prev+1)
  }

  const decrementCount = () => {
    setCount(prev => prev - 1)
  }

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className='w-1/3 flex flex-col items-center gap-10 py-10'>
        <h1 className={`text-8xl font-medium ${count > 0 ? "text-blue-600" : count < 0 ? "text-red-600" : "text-black"}`} data-testid="count">{count}</h1>
        <div className="flex w-full justify-evenly">
          <Button
            colorPrefix={"red"}
            symbol={"-"}
            action={decrementCount}
          />

          <Button
            colorPrefix={"blue"}
            symbol={"+"}
            action={incrementCount}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
