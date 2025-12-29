import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SortCircleDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14.149,9.5h-4.627l2.314-2.296,2.313,2.296Zm9.851,2.5c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-18.828-1h13.328l-5.603-5.561c-.293-.293-.677-.439-1.061-.439s-.768.146-1.061.439l-5.604,5.561Zm13.578,2H5.25l5.69,5.561c.586.586,1.535.586,2.121,0l5.689-5.561Z"/>
</svg>

);
