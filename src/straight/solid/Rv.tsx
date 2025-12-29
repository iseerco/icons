import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Rv = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3.058,21c-.587,3.954,5.472,3.952,4.884,0Zm17.884,0c.587,3.954-5.472,3.952-4.884,0ZM16,7h4.723l2.618,4.582c.078.135.14.277.2.418H15V8A1,1,0,0,1,16,7ZM4,7H8V9H4Zm20,7c0,.021,0,.042,0,.062V19H15V14ZM13,8a3,3,0,0,1,3-3h8a4,4,0,0,0-4-4H4A4,4,0,0,0,0,5V15.414L3.586,19H13ZM2,11V5h8v6Z"/></svg>

);
