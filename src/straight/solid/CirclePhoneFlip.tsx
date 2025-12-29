import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CirclePhoneFlip = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-3.11,19c-.826,0-1.654-.298-2.283-.928l-1.607-1.607,3.164-3.164,2.071,2.071c2.364-.902,4.108-2.575,5.137-5.137l-2.071-2.071,3.164-3.164,1.607,1.607c.63,.628,.928,1.457,.928,2.283,0,4.566-5.87,10.11-10.11,10.11Z"/></svg>

);
