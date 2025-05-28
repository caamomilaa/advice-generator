import { useEffect, useState } from 'react';

const Advice = () => {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    getAdvice(setAdvice);
  }, []);

  return (
    <>
      <div>
        <h1>Advice #{advice?.slip?.id}</h1>
        <p>{advice?.slip?.advice}</p>
      </div>

      <button onClick={}>change</button>
    </>
  );
};

const getAdvice = async setAdvice => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const advice = await response.json();
    setAdvice(advice);
  } catch (error) {
    console.log('ta mal');
  }
};

export default Advice;
