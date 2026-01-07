import { useEffect } from 'react';

export default function Whitepaper() {
  useEffect(() => {
    window.location.href = 'https://whitepaper.farmsense.global/';
  }, []);

  return null;
}
