'use client';

import { useEffect } from 'react';

const Fireworks = () => {
  useEffect(() => {
    const loadScripts = async () => {
      // Tải file CSS
      const link = document.createElement('link');
      link.href = 'https://anonyviet.com/resource/phaohoa/fireworks1.css';
      link.rel = 'stylesheet';
      link.type = 'text/css';
      document.head.appendChild(link);

      // Tải file JS
      const script = document.createElement('script');
      script.src = 'https://anonyviet.com/resource/phaohoa/fireworks1.js';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        const container = document.createElement('div');
        container.id = 'fireworks-container';
        document.body.appendChild(container);

        const duration = 2025 * 1000;
        const intervalTime = 3000; // Mỗi 3 giây tạo 1 loạt pháo hoa
        const finalRocketInterval = 15000; // Mỗi 15 giây bắn 1 quả pháo hoa lớn
        const startTime = Date.now();

        const launchFirework = () => {
          if (Date.now() - startTime > duration) return;
          const randomFirework = {
            left: `${Math.random() * 80 + 10}%`,
            color: `hsl(${Math.random() * 360}, 100%, 60%)`,
            explosionType: Math.random() > 0.5 ? 'circle' : 'star',
            size: Math.random() > 0.5 ? 'large' : 'medium',
            launchTime: 0,
          };
          window.launchRocket(container, randomFirework);
        };

        const launchFinalRocket = () => {
          if (Date.now() - startTime > duration) return;
          window.launchGrandFinaleRocket(container);
        };

        // Lặp lại hiệu ứng pháo hoa trong 5 phút
        const interval = setInterval(launchFirework, intervalTime);
        const finalInterval = setInterval(launchFinalRocket, finalRocketInterval);

        // Dừng hiệu ứng sau 5 phút
        setTimeout(() => {
          clearInterval(interval);
          clearInterval(finalInterval);
          window.launchGrandFinaleRocket(container);
        }, duration);
      };
    };

    loadScripts();
  }, []);

  return null;
};

export default Fireworks;
