import { useState, useEffect } from 'react';
import { liff } from '../lib/liff';

function useLiff({ liffId }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const initLiff = async ({ liffId }) => {
    setLoading(true);
    try {
      await liff.init({ liffId });
      alert('success liff init');
    } catch (error) {
      alert({ error });
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initLiff({ liffId });
  }, [liffId]);

  return { loading, error };
}

export default useLiff;
