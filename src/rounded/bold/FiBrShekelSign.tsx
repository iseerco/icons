import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrShekelSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2.5,24c-.828,0-1.5-.672-1.5-1.5V3.5C1,1.57,2.57,0,4.5,0h4c4.687,0,8.5,3.813,8.5,8.5v8c-.034,1.972-2.966,1.971-3,0V8.5c0-3.032-2.468-5.5-5.5-5.5H4.5c-.275,0-.5,.225-.5,.5V22.5c0,.828-.672,1.5-1.5,1.5Zm12,0h-4c-1.93,0-3.5-1.57-3.5-3.5V7.5c.034-1.972,2.966-1.971,3,0v13c0,.275,.225,.5,.5,.5h4c3.032,0,5.5-2.468,5.5-5.5V1.5c.034-1.972,2.966-1.971,3,0V15.5c0,4.687-3.813,8.5-8.5,8.5Z"/></svg>

);
