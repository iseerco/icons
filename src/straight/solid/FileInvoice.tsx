import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileInvoice = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,18H8v-3h8v3Zm6-11V24H2V3C2,1.343,3.343,0,5,0H15V7h7Zm-16,0h5v-2H6v2Zm0,4h5v-2H6v2Zm12,2H6v7h12v-7ZM17,.586V5h4.414L17,.586Z"/></svg>

);
