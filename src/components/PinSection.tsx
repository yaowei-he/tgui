import { useEffect, useState } from 'react';
import { PinInput, Section } from '@telegram-apps/telegram-ui';
import {
  initData,
  useSignal
} from '@tma.js/sdk-react';
import { useNavigate } from 'react-router-dom';

export function PinSection() {
  const [code, setCode] = useState<number[]>([]);
  const initDataState = useSignal(initData.state);
  const navigate = useNavigate();


  const handleSubmit = () => {
    if (!initDataState?.user) {
      console.log('Telegram user not found');
      return;
    }

    if (code.length !== 6) {
      console.log('PIN not complete');
      return;
    }

    const payload = {
      telegramUserId: initDataState.user.id,
      code,                      // number[]
      pinString: code.join(''),  // 业务层使用
      initDataRaw: initDataState, // ✅ 后端校验必需
    };

    console.log('发送数据:', payload);
    // console.log("pin码 :" + code.join);
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
