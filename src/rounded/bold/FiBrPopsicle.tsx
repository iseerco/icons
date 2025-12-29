import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrPopsicle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C7.038,0,3,4.038,3,9v5.5c0,3.033,2.467,5.5,5.5,5.5h2v2.5c0,.829.671,1.5,1.5,1.5s1.5-.671,1.5-1.5v-2.5h2c3.032,0,5.5-2.467,5.5-5.5v-5.5C21,4.038,16.963,0,12,0Zm6,14.5c0,1.378-1.121,2.5-2.5,2.5h-2v-6.5c0-.829-.671-1.5-1.5-1.5s-1.5.671-1.5,1.5v6.5h-2c-1.378,0-2.5-1.122-2.5-2.5v-5.5c0-3.309,2.691-6,6-6s6,2.691,6,6v5.5Z"/>
</svg>

);
