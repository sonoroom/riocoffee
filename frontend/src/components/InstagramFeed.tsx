import React from "react";
import { useEffect } from 'react';

export function InstagramFeed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full">
      <div
        className="elfsight-app-6f5c4ff6-f72f-4720-afb4-0b8a7497c995"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
