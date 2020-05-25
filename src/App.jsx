import React from 'react';
import useLiff from './hooks/useLiff';

const liffId = '1111111111-XXXXXXXX';

function App() {
  const { loading, error, profile, fetchProfile } = useLiff({ liffId });

  if (loading) return <p>...loading</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h1>Hello LIFF</h1>
      <section>
        <button onClick={() => fetchProfile()}>Get Profile</button>
        {profile && (
          <div>
            <p>UserID: {profile.userId}</p>
            <p>DisplayName: {profile.displayName}</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
