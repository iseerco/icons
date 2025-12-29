import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ItalianLiraSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,23c0,.55-.45,1-1,1H3c-.55,0-1-.45-1-1s.45-1,1-1c1.1,0,2-.9,2-2v-4H3c-.55,0-1-.45-1-1s.45-1,1-1h2v-2H3c-.55,0-1-.45-1-1s.45-1,1-1h2v-2C5,3.59,8.59,0,13,0s7.55,3.14,7.69,3.28c.4,.38,.41,1.01,.03,1.41-.38,.4-1.01,.41-1.41,.03-.03-.03-2.91-2.72-6.31-2.72s-6,2.69-6,6v2h10c.55,0,1,.45,1,1s-.45,1-1,1H7v2h10c.55,0,1,.45,1,1s-.45,1-1,1H7v4c0,.73-.2,1.41-.54,2h14.54c.55,0,1,.45,1,1Z"/></svg>

);
