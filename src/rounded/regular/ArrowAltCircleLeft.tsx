import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowAltCircleLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm6-10c0,.552-.448,1-1,1h-5v3.361c0,.695-.852,1.044-1.35,.552l-4.418-4.361c-.309-.305-.309-.799,0-1.104l4.418-4.361c.498-.492,1.35-.143,1.35,.552v3.361h5c.552,0,1,.448,1,1Z"/></svg>

);
