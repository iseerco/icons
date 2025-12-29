import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Shelves = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,0h-6.5c-1.381,0-2.5,1.119-2.5,2.5v4.5H2V0H0v24h2v-3h20v3h2V0Zm-7,2.5c0-.276.224-.5.5-.5h4.5v5h-5V2.5ZM2,14.5c0-.275.224-.5.5-.5h4c.276,0,.5.225.5.5v4.5H2v-4.5Zm12,4.5h-5v-4.5c0-.275.224-.5.5-.5h4c.276,0,.5.225.5.5v4.5Zm2,0v-4.5c0-1.379-1.122-2.5-2.5-2.5h-4c-.562,0-1.082.187-1.5.501-.418-.315-.938-.501-1.5-.501H2.5c-.171,0-.338.017-.5.05v-3.05h20v10h-6Z"/>
</svg>

);
