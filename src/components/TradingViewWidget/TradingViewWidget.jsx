import { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
   const container = useRef();

   useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "width": "832",
          "height": "460",
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "allow_symbol_change": true,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;

      container.current.innerHTML = '';
      container.current.appendChild(script);

      // Cleanup function
      return () => {
         container.current.innerHTML = '';
      };
   }, []);

   return (
      <div className="tradingview-widget-container !w-full" ref={container}>
         <div className="tradingview-widget-container__widget"></div>
         <div className="tradingview-widget-copyright">
            <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
               <span className="blue-text">Track all markets on TradingView</span>
            </a>
         </div>
      </div>
   );
}

export default memo(TradingViewWidget);
