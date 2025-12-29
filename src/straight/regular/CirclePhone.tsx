import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CirclePhone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Zm3.288,11.115l-1.775,1.775c-2.027-.773-3.521-2.208-4.403-4.403l1.775-1.775-2.712-2.712-1.378,1.378c-.54,.539-.795,1.249-.795,1.957,0,3.914,5.032,8.666,8.666,8.666,.708,0,1.418-.256,1.957-.795l1.378-1.378-2.712-2.712Z"/></svg>

);
