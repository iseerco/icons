import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TemperatureUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,12.1c4.334,4.253,1.079,12.007-5,11.89C.922,24.1-2.335,16.347,2,12.1V4.985c.211-6.61,9.791-6.6,10,0Zm-2,4.89a3,3,0,0,0-2-2.828V4.875a1,1,0,0,0-2,0v9.282a3,3,0,1,0,4,2.828Zm12.7-13.692-3-3a1,1,0,0,0-1.414,0l-3,3A1,1,0,0,0,16.7,4.708L18,3.415V11a1,1,0,0,0,2,0V3.415l1.3,1.293A1,1,0,0,0,22.71,3.293h-.005Z"/></svg>

);
