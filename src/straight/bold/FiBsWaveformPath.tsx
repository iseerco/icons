import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWaveformPath = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15,7h3v10h-3V7Zm-5,17h3V0h-3v24ZM20,4v16h3V4h-3Zm-15,15h3V5h-3v14ZM0,15h3v-6H0v6Z"/></svg>

);
