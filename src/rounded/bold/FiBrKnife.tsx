import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrKnife = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.363.191a2.72,2.72,0,0,0-3,.686L.4,21.484A1.5,1.5,0,0,0,2.6,23.515l4.09-4.442A17.308,17.308,0,0,0,24,3V2.645A2.583,2.583,0,0,0,22.363.191ZM9.762,15.738l11.2-12.165C20.634,6.277,18.228,14.022,9.762,15.738Z"/></svg>

);
