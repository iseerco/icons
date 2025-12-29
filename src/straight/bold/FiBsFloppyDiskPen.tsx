import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFloppyDiskPen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3,19h8v3H0V3.5C0,1.57,1.57,0,3.5,0h12.742l5.758,5.758v5.262c-1.074-.047-2.155.317-3,1.092v-5.112l-4-4v4H5V3h-1.5c-.275,0-.5.224-.5.5v15.5Zm7.5-10c-1.933,0-3.5,1.567-3.5,3.5s1.567,3.5,3.5,3.5,3.5-1.567,3.5-3.5-1.567-3.5-3.5-3.5Zm12.861,4.639c-.852-.852-2.234-.852-3.086,0l-7.275,7.275v3.086h3.086l7.275-7.275c.852-.852.852-2.234,0-3.086Z"/>
</svg>

);
