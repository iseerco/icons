import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSortCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.962,0-9-4.037-9-9S7.038,3,12,3s9,4.037,9,9-4.037,9-9,9Zm-6.75-8h13.5l-5.689,5.561c-.586.586-1.535.586-2.121,0l-5.69-5.561Zm13.5-2H5.25l5.69-5.561c.586-.586,1.535-.586,2.121,0l5.689,5.561Z"/>
</svg>

);
