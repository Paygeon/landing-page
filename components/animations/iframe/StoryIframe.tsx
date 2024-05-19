"use client"
import React, { useEffect } from 'react';

const StoryIframe: React.FC = () => {
  useEffect(() => {
    const handleLoad = () => {
      console.log('Iframe loaded successfully');
    };

    const handleError = () => {
      console.error('Iframe failed to load');
    };

    const iframe = document.getElementById('story-iframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.addEventListener('load', handleLoad);
      iframe.addEventListener('error', handleError);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleLoad);
        iframe.removeEventListener('error', handleError);
      }
    };
  }, []);

  return (
    <iframe
      id="story-iframe"
      src="https://story.screenspace.io/2726402135/e_79845978"
      width="100%"
      height="100%"
      allow="clipboard-write"
      scrolling="no"
      style={{ border: 'none', background: '#efeff8' }}
    ></iframe>
  );
};

export default StoryIframe;
