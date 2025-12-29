import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRulerVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.5,.03C8.57,.03,7,1.601,7,3.53V20.53c0,1.93,1.57,3.5,3.5,3.5h7.5V.03h-7.5Zm0,21c-.275,0-.5-.225-.5-.5V3.53c0-.275,.225-.5,.5-.5h4.5v2h-3v3h3v2.5h-3v3h3v2.5h-3v3h3v2h-4.5Z"/></svg>

);
