import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrBangladeshiTakaSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,11.5v3c0,5.15-4.58,9.5-10,9.5h-2.5c-1.93,0-3.5-1.57-3.5-3.5V9H2.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h3.5V3.5c0-1.38-1.12-2.5-2.5-2.5h-1c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h1c1.93,0,3.5,1.57,3.5,3.5v4.5h3.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5h-3.5v11.5c0,1.38,1.12,2.5,2.5,2.5h2.5c4.79,0,9-3.97,9-8.5v-3c0-1.38-1.12-2.5-2.5-2.5h-2c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h2c1.93,0,3.5,1.57,3.5,3.5Z"/></svg>

);
