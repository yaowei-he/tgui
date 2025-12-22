import {
    Input,
    Button,
    Headline,
    Text,
    List,
    IconButton,
  } from '@telegram-apps/telegram-ui';
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  // 导入图标 (如果你使用的是 lucide-react 或其他库，或者直接写 SVG)
  const EyeIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
  const EyeOffIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>;
  
  export const PasswordSection = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    const handleLogin = () => {
      setLoading(true);
        console.log("password: " + password);
      navigate('/over')
    };
  
    return (
      <List style={{ 
        backgroundColor: 'var(--tgui--bg_color)', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px 20px' 
      }}>
        {/* 锁图标 - 提示用户这是密码页 */}
        <div style={{ marginBottom: 24, fontSize: '60px' }}>🔐</div>
  
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <Headline weight="1">Enter Password</Headline>
          <Text style={{ color: 'var(--tgui--subtitle_text_color)', display: 'block', marginTop: 8 }}>
            Your account is protected with <br /> an additional password.
          </Text>
        </div>
  
        <div style={{ width: '100%', maxWidth: 400 }}>
          <Input
            header="Password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // 右侧显示/隐藏密码按钮
            after={
              <IconButton 
                mode="plain" 
                size="s" 
                onClick={() => setShowPassword(!showPassword)}
                style={{ color: 'var(--tgui--hint_color)' }}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </IconButton>
            }
          />
  
  
          <Button
            mode="filled"
            size="l"
            stretched
            loading={loading}
            disabled={!password}
            onClick={handleLogin}
            style={{ marginTop: 32, height: 50, borderRadius: 12 }}
          >
            Next
          </Button>
        </div>
      </List>
    );
  };