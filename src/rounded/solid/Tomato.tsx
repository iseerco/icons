import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tomato = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.8,5.016c1.047-.61,3.313-3.1,1.513-3.964a1,1,0,0,0-1.265.632A3.465,3.465,0,0,1,13,3.93V1a1,1,0,0,0-2,0V3.93A3.462,3.462,0,0,1,7.949,1.684a1,1,0,0,0-1.265-.632C4.882,1.92,7.147,4.4,8.2,5.016A8.786,8.786,0,0,0,0,14c0,4.721,4.276,10,10,10h4C26.507,24.063,27.352,5.878,15.8,5.016ZM16.97,9.242c-.738,2.131-4.747-.973-4.97-1.562-.211.579-4.235,3.7-4.97,1.562A1,1,0,0,1,7.757,8.03,4.188,4.188,0,0,0,10.711,6h2.577a4.187,4.187,0,0,0,2.954,2.03A1,1,0,0,1,16.97,9.242Z"/></svg>

);
