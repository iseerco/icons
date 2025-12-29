import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSticker = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5,12,12.207,12l11.793-11.793C24,5,18.617,0,12,0ZM1,12C1,5.935,5.935,1,12,1c5.729,0,10.448,4.401,10.955,10.001-6.581.025-11.929,5.373-11.954,11.954-5.599-.506-10.001-5.226-10.001-10.955Zm11.003,10.79c.111-5.899,4.888-10.677,10.788-10.788l-10.788,10.788Z"/>
</svg>

);
