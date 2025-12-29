import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HourglassStart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8.383,5h7.241c-.726,1.911-2.361,3.379-3.609,4.274-1.254-.902-2.898-2.374-3.632-4.274Zm12.617,16v3H3v-3c0-4.006,2.24-7.013,4.442-9-2.202-1.987-4.442-4.994-4.442-9,0-1.654,1.346-3,3-3h12c1.654,0,3,1.346,3,3,0,4.005-2.231,7.012-4.425,9,2.193,1.988,4.425,4.995,4.425,9Zm-3.09-16.845l.182-1.155H5.907l.186,1.158c.567,3.54,3.61,6.009,5.373,7.165l.547.359.548-.358c1.757-1.146,4.788-3.604,5.35-7.169Z"/></svg>

);
