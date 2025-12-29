import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrDrawer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,0H7C4.243,0,2,2.243,2,5v17.5c0,.828.671,1.5,1.5,1.5s1.5-.672,1.5-1.5v-1.5h14v1.5c0,.828.671,1.5,1.5,1.5s1.5-.672,1.5-1.5V5c0-2.757-2.243-5-5-5ZM5,12v-3h5.5v.5c0,.829.671,1.5,1.5,1.5s1.5-.671,1.5-1.5v-.5h5.5v3H5ZM7,3h3.5v.5c0,.829.671,1.5,1.5,1.5s1.5-.671,1.5-1.5v-.5h3.5c1.103,0,2,.897,2,2v1H5v-1c0-1.103.897-2,2-2Zm-2,15v-3h5.5v.5c0,.828.671,1.5,1.5,1.5s1.5-.672,1.5-1.5v-.5h5.5v3H5Z"/>
</svg>

);
