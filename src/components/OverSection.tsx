// src/CompletedScreen.tsx
import {
    List,
    Headline,
    Text,
    Button,
  } from '@telegram-apps/telegram-ui';
  import React from 'react';
  
  // 你可能需要一个绿色的对勾图标。这里我们用一个简单的 SVG 或者可以放图片 URL。
  // 在实际项目中，通常会使用一个本地 SVG 文件或者 Telegram Assets 中的图标。
  const CheckmarkIcon = () => (
    <svg
      width="80"
      height="80"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        color: 'var(--tgui--accent_text_color)', // 使用 Telegram UI 的主题绿色
        marginBottom: '20px'
      }}
    >
      <path
        d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
        fill="currentColor"
      />
    </svg>
  );

  export const OverSection = () => {
    return (
      <List style={{
        backgroundColor: 'var(--tgui--bg_color)', // 页面背景色
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // 垂直居中
        alignItems: 'center',    // 水平居中
        padding: '20px'
      }}>
        <CheckmarkIcon />
  
        <Headline weight="1" style={{ marginBottom: '10px', textAlign: 'center' }}>
          Success!
        </Headline>
  
        <Text
          style={{
            color: 'var(--tgui--subtitle_text_color)',
            textAlign: 'center',
            marginBottom: '30px',
            maxWidth: '300px'
          }}
        >
          Your phone number has been successfully verified. You can now proceed.
        </Text>
  
        {/* 返回按钮 (可选) */}
        <div style={{ width: '100%', maxWidth: 300 }}>
          <Button
            mode="filled"
            size="l"
            stretched
            style={{ height: 50, borderRadius: 12 }}
          >
            Continue
          </Button>
        </div>
      </List>
    );
  };