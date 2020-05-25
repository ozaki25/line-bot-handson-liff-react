import React from 'react';
import useLiff from './hooks/useLiff';

const liffId = '1111111111-XXXXXXXX';

function App() {
  const { loading, error } = useLiff({ liffId });

  if (loading) return <p>...loading</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h1>Hello LIFF</h1>
    </div>
  );
}

export default App;
