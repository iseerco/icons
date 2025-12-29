import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mailbox = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,8c0-2.757-2.243-5-5-5S0,5.243,0,8v13H10V8Zm-3,3H3v-2H7v2ZM18,3H9.894c1.299,1.271,2.106,3.043,2.106,5v13h12V9c0-3.309-2.691-6-6-6Zm3,10h-2v-2h-4v-2h6v4Z"/></svg>

);
