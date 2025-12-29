import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCircleBookmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.963,0-9-4.037-9-9S7.037,3,12,3s9,4.038,9,9-4.037,9-9,9Zm4-11.973v7.245c0,.648-.783.972-1.241.514l-2.759-2.759-2.759,2.759c-.458.458-1.241.134-1.241-.514v-7.245c0-1.105.895-2,2-2h4c1.105,0,2,.895,2,2Z"/></svg>

);
