import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrDisplayMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,1H5.5C2.467,1,0,3.467,0,6.5v6C0,15.533,2.467,18,5.5,18h5v2h-2.5c-.829,0-1.5.671-1.5,1.5s.671,1.5,1.5,1.5h8c.829,0,1.5-.671,1.5-1.5s-.671-1.5-1.5-1.5h-2.5v-2h5c3.033,0,5.5-2.467,5.5-5.5v-6c0-3.033-2.467-5.5-5.5-5.5Zm2.5,11.5c0,1.378-1.122,2.5-2.5,2.5H5.5c-1.378,0-2.5-1.122-2.5-2.5v-6c0-1.378,1.122-2.5,2.5-2.5h13c1.378,0,2.5,1.122,2.5,2.5v6Zm-5-3c0,.829-.671,1.5-1.5,1.5h-1v1c0,.829-.671,1.5-1.5,1.5s-1.5-.671-1.5-1.5v-1h-1c-.829,0-1.5-.671-1.5-1.5s.671-1.5,1.5-1.5h1v-1c0-.829.671-1.5,1.5-1.5s1.5.671,1.5,1.5v1h1c.829,0,1.5.671,1.5,1.5Z"/>
</svg>

);
