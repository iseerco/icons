import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CallDuration = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,0c-3.309,0-6,2.691-6,6s2.691,6,6,6,6-2.691,6-6S21.309,0,18,0Zm1.079,8.441l-2.079-2.019v-3.423h2v2.577l1.473,1.43-1.394,1.435Zm-1.848,4.788l6.265,6.266-2.767,2.767c-1.105,1.106-2.6,1.716-4.207,1.716C9.274,23.979.022,14.727.022,7.479.022,5.87.631,4.376,1.738,3.271L4.505.504l6.265,6.265-3.721,3.722c1.373,3.061,3.493,5.186,6.453,6.468l3.73-3.729Z"/>
</svg>

);
