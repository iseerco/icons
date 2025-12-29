import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWallet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4,4H24V1H4C1.794,1,0,2.794,0,5v14.5c0,1.93,1.57,3.5,3.5,3.5H24V6H4c-.552,0-1-.449-1-1s.448-1,1-1Zm0,5H21v11H3.5c-.275,0-.5-.224-.5-.5V8.874c.319,.083,.655,.126,1,.126Zm12,5.5c0-.828,.672-1.5,1.5-1.5s1.5,.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Z"/></svg>

);
