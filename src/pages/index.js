import styles from './index.css';

import * as sdk from '../services/sdk';
import { useState, useEffect } from 'react';

export default function() {
  const [fee, setFee] = useState(0);
  const [timestamp, setTimestamp] = useState(0);

  const refreshFee = async function() {
    const fee = await sdk.getFee()
    const timestamp = await sdk.getTimeStamp()
    setFee(fee)
    setTimestamp(timestamp)
  }

  useEffect(() => {
    let timer = setInterval(refreshFee, 10000);
    return () => {
      clearInterval(timer)
    }
  }, [fee, timestamp])
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <div >
        server url = http://demodex.wandevs.org:9000/api/v1/fee
      </div>
      <div>
        今日剩余跨链额度：
      </div>
      <div>
        fee：{fee}
      </div>
      <div>
        timestamp: {timestamp}
      </div>
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>
    </div>
  );
}
