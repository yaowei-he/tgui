import { useEffect, useState } from 'react';
import { PinInput, Section } from '@telegram-apps/telegram-ui';

import { useNavigate } from 'react-router-dom';

export function PinSection() {
  const [code, setCode] = useState<number[]>([]);
  const navigate = useNavigate();


  const handleSubmit = () => {


    if (code.length !== 6) {
      console.log('PIN not complete');
      return;
    }
    const pinString = code.join('')


    console.log("pin码 :" + pinString);
    navigate('/password');

    // await fetch('/api/verify-pin', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(payload),
    // });
  };

  useEffect(() => {
    if (code.length === 6) {
      console.log('PIN 完成:', code);
      handleSubmit();
      // verifyCode(code)
    }
  }, [code]);

  return (
    <Section>
 
    <PinInput
     label="Please enter your code"
      value={code}
      pinCount={6}
      autoFocus
      onChange={(code) => {
        setCode(code);
        console.log('PinInput 当前值:', code);
      }}
    />
       </Section>
  );
}
