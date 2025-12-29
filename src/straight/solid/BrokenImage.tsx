import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BrokenImage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.41,5h-4.41V.59l4.41,4.41ZM7.52,11.08l4.5,4.5,4.5-4.5,5.48,5.48V7h-7V0H5c-1.66,0-3,1.34-3,3v13.6l5.52-5.52Zm9,2.83l-4.5,4.5-4.5-4.5-5.52,5.52v4.57H22v-4.61l-5.48-5.48Z"/></svg>

);
