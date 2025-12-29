import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RewindButtonCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12,6.211L3.177,12l8.823,5.789v-3.937l6,3.937V6.211l-6,3.937v-3.937Zm4,3.704v4.17l-3.177-2.085,3.177-2.085Zm-6,4.17l-3.177-2.085,3.177-2.085v4.17ZM12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Z"/>
</svg>

);
