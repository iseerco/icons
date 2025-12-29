import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowLeftToArc = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,13h-14.049l4.759,4.796-1.42,1.408-5.677-5.721c-.816-.816-.816-2.15.002-2.97l5.675-5.718,1.42,1.408-4.759,4.796h14.049v2Zm-22-1C2,6.486,6.486,2,12,2V0C5.383,0,0,5.383,0,12s5.383,12,12,12v-2c-5.514,0-10-4.486-10-10Z"/>
</svg>

);
