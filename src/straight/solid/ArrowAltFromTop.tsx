import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowAltFromTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2V0H3V2H11V18H6l5.017,5.555c.525,.593,1.442,.593,1.966,0l5.017-5.555h-5V2h8Z"/></svg>

);
