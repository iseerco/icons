import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EarthAfrica = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm7.879,9.121c-.563.563-1.326.879-2.121.879h-2.257l1.5,1.5v2.5l-3,5h-2l-1-4h-2c-1.105,0-2-.895-2-2v-2l3-2h4v-2l-1.5-1.5-2.5,1.5h-2v-2l-1.523-1.332c1.584-1.053,3.483-1.668,5.523-1.668,4.048,0,7.543,2.418,9.114,5.886l-1.235,1.235Z"/></svg>

);
