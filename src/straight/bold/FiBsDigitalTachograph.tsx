import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDigitalTachograph = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,2H3.5c-1.93,0-3.5,1.57-3.5,3.5v16.5h24V5.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,17H3V5.5c0-.275.224-.5.5-.5h17c.275,0,.5.225.5.5v13.5ZM5,14h6v3h-6v-3Zm8,0h6v3h-6v-3Zm2-2H5v-5h10v5Z"/>
</svg>

);
