import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBr0 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24c-4.411,0-8-3.589-8-8V8C4,3.589,7.589,0,12,0s8,3.589,8,8v8c0,4.411-3.589,8-8,8Zm0-21c-2.757,0-5,2.243-5,5v8c0,2.757,2.243,5,5,5s5-2.243,5-5V8c0-2.757-2.243-5-5-5Z"/></svg>

);
