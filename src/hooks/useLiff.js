import { useState, useEffect } from 'react';
import { liff } from '../lib/liff';

function useLiff({ liffId }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);

  const initLiff = async ({ liffId }) => {
    setLoading(true);
    try {
      await liff.init({ liffId });
      if (liff.isLoggedIn()) {
        console.log('logged in!');
      } else {
        console.log('not logged in');
        liff.login();
      }
    } catch (error) {
      alert({ error });
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProfile = async () => {
    setLoading(true);
    try {
      setProfile(await liff.getProfile());
    } catch (error) {
      console.log({ error });
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initLiff({ liffId });
  }, [liffId]);

  return { loading, error, fetchProfile, profile };
}

export default useLiff;
