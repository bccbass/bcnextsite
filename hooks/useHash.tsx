'use client';
import { useEffect, useState } from 'react';

export function useHash() {
  const [hash, setHash] = useState<string>('');

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash.replace('#', ''));

    updateHash(); // grab initial hash
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  return hash;
}