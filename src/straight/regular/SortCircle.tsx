import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SortCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm-6.75-9h13.5l-5.689,5.561c-.586.586-1.535.586-2.121,0l-5.69-5.561Zm7.811-7.561l5.689,5.561H5.25l5.69-5.561c.586-.586,1.535-.586,2.121,0Z"/>
</svg>

);
