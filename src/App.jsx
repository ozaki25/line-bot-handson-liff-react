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
        {profile && <p>こんにちは {profile.displayName}さん</p>}
      </section>
      <h2>ハンズオン資料</h2>
      <ul>
        <li>
          <a href="https://firebase-handson.ozaki25.now.sh/" target="_blank">
            Firebase Authenticationハンズオン
          </a>
        </li>
        <li>
          <a href="https://graphql-handson.ozaki25.now.sh/" target="_blank">
            GraphQLハンズオン
          </a>
        </li>
        <li>
          <a href="https://jamstack-handson.ozaki25.now.sh/" target="_blank">
            Jamstackハンズオン
          </a>
        </li>
        <li>
          <a href="https://line-bot-handson.ozaki25.now.sh/" target="_blank">
            LINE Botハンズオン
          </a>
        </li>
      </ul>
    </div>    </div>
  );
}

export default App;
