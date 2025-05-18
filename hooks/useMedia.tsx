"use client";

import { useState, useEffect } from "react";

function useMedia(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const updateMatches = () => setMatches(mediaQuery.matches);

    updateMatches(); // Set initial value
    mediaQuery.addEventListener("change", updateMatches);

    return () => mediaQuery.removeEventListener("change", updateMatches);
  }, [query]);

  return matches;
}

export default useMedia;
