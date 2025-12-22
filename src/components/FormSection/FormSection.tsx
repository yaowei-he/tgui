import {
  List,      // 1. 引入 List
  Section,
  Select,
  Input,
  Button,
} from '@telegram-apps/telegram-ui';
import { useState } from 'react';

type Country = {
  label: string;
  dialCode: string;
};

export const FormSection = () => {
  const countries: Country[] = [
    { label: 'China', dialCode: '+86' },
    { label: 'Vietnam', dialCode: '+84' },
    { label: 'Japan', dialCode: '+81' },
    { label: 'United States', dialCode: '+1' },
  ];

  const [dialCode, setDialCode] = useState('+86');
  const [phone, setPhone] = useState('');
  const [sending, setSending] = useState(false);

  // const fullPhone = `${dialCode}${phone}`;

  const handleSend = async () => {
    if (!phone) return;
    setSending(true);
    
    // 模拟请求
    setTimeout(() => {
      console.log(`Sending code to ${dialCode} ${phone}`);
      setSending(false);
    }, 1500);
  };

  return (
    // 1. 外层使用 List 包裹，这会自动处理移动端的边距和背景色
    <List style={{ background: 'var(--tgui--secondary_bg_color)', minHeight: '100vh'}}>
      
      {/* 2. 表单区域：只放输入框，形成一个“卡片”组 */}
      <Section 
        header="Login to Telegram" 
      >
        <Select
          header="Country"
          value={dialCode}
          onChange={e => setDialCode(e.target.value)}
        >
          {countries.map(c => (
            <option key={c.dialCode} value={c.dialCode}>
              {c.label} ({c.dialCode})
            </option>
          ))}
        </Select>

        <Input
          header="Phone Number"
          inputMode="tel"
          placeholder="000 0000"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          before={dialCode}
        />

<div style={{ padding: 16, paddingBottom:64 }}> 
          <Button
            mode="filled"
            size="l"
            stretched
            disabled={!phone || sending}
            loading={sending}
            onClick={handleSend}
          >
            Send code
          </Button>
        </div>
    </Section> 

      {/* 3. 按钮区域：移出 Section，给予独立的 Padding */}
      {/* <div style={{ padding: '0 20px', marginTop: 16}}>
        <Button
          mode="filled"
          size="l"
          stretched // 让按钮撑满这个 div 的宽度
          disabled={!phone || sending}
          loading={sending} // 使用组件自带的 loading 状态
          onClick={handleSend}
        >
          Send code
        </Button>
      </div> */}
      
     </List>
  );
};