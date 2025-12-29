import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSignalBarsGood = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15,4h-2c-1.654,0-3,1.346-3,3v2h-2c-1.654,0-3,1.346-3,3v2h-2c-1.654,0-3,1.346-3,3v7h18V7c0-1.654-1.346-3-3-3ZM5,21h-2v-4h2v4Zm5,0h-2v-9h2v9Zm5,0h-2V7h2v14Z"/></svg>

);
