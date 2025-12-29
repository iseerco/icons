import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHighDefinition = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,2H3.5c-1.93,0-3.5,1.57-3.5,3.5v16.5h24V5.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,17H3V5.5c0-.276.224-.5.5-.5h17c.276,0,.5.224.5.5v13.5ZM9,7h2v10h-2v-4h-2v4h-2V7h2v4h2v-4Zm7,0h-3v10h3c1.654,0,3-1.346,3-3v-4c0-1.654-1.346-3-3-3Zm1,7c0,.551-.449,1-1,1h-1v-6h1c.551,0,1,.449,1,1v4Z"/>
</svg>

);
