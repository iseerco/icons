import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MailboxFlagUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m4.5,3.024C1.903,3.278,0,5.613,0,8.223v9.277c0,1.933,1.567,3.5,3.5,3.5h3c1.933,0,3.5-1.567,3.5-3.5v-9.5c0-2.922-2.519-5.266-5.5-4.976Zm1.5,7.976h-2c-.552,0-1-.448-1-1s.448-1,1-1h2c.552,0,1,.448,1,1s-.448,1-1,1ZM18,3h-8.106c1.299,1.271,2.106,3.043,2.106,5v9.5c0,1.328-.474,2.548-1.261,3.5h9.761c1.933,0,3.5-1.567,3.5-3.5v-8.5c0-3.314-2.686-6-6-6Zm1,4h-1v3c0,.552-.448,1-1,1s-1-.448-1-1v-4c0-.552.448-1,1-1h2c.552,0,1,.448,1,1s-.448,1-1,1Z"/>
</svg>

);
