import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChimney = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,3.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,0,0,1.57,0,3.5v6.5h3v14h18v-14h3V3.5Zm-16,6.5v4h-2v-4h2Zm-2,7h7v4h-7v-4Zm10,4v-4h2v4h-2Zm2-7h-7v-4h7v4Zm3-7H3v-3.5c0-.276.224-.5.5-.5h17c.276,0,.5.224.5.5v3.5Z"/>
</svg>

);
