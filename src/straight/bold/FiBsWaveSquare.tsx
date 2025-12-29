import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWaveSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.5,22h-3.5c-1.93,0-3.5-1.57-3.5-3.5V5.5c0-.276-.224-.5-.5-.5h-3.5c-.276,0-.5.224-.5.5v8H0v-3h3v-5c0-1.93,1.57-3.5,3.5-3.5h3.5c1.93,0,3.5,1.57,3.5,3.5v13c0,.276.224.5.5.5h3.5c.276,0,.5-.224.5-.5v-8h6v3h-3v5c0,1.93-1.57,3.5-3.5,3.5Z"/></svg>

);
