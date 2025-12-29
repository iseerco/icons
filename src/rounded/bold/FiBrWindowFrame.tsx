import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrWindowFrame = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.5,21h-.5V5.5c0-3.033-2.467-5.5-5.5-5.5H7.5C4.467,0,2,2.467,2,5.5v15.5h-.5c-.829,0-1.5.671-1.5,1.5s.671,1.5,1.5,1.5h21c.829,0,1.5-.671,1.5-1.5s-.671-1.5-1.5-1.5Zm-3.5,0h-5.5v-7.5h5.5v7.5Zm0-15.5v5h-5.5V3h3c1.378,0,2.5,1.122,2.5,2.5ZM7.5,3h3v7.5h-5.5v-5c0-1.378,1.122-2.5,2.5-2.5Zm-2.5,10.5h5.5v7.5h-5.5v-7.5Z"/>
</svg>

);
