import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MailboxFlagUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m10,8c0-2.757-2.243-5-5-5S0,5.243,0,8v13h10v-13Zm-3,3H3v-2h4v2ZM18,3h-8.106c1.299,1.271,2.106,3.043,2.106,5v13h12v-12c0-3.309-2.691-6-6-6Zm2,2v2h-2s0,4,0,4h-2v-6h4Z"/>
</svg>

);
