import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrDigitalTachograph = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,2H5.5C2.467,2,0,4.468,0,7.5v9c0,3.032,2.467,5.5,5.5,5.5h13c3.032,0,5.5-2.468,5.5-5.5V7.5c0-3.032-2.468-5.5-5.5-5.5Zm2.5,14.5c0,1.379-1.121,2.5-2.5,2.5H5.5c-1.378,0-2.5-1.121-2.5-2.5V7.5c0-1.379,1.122-2.5,2.5-2.5h13c1.379,0,2.5,1.121,2.5,2.5v9Zm-10-1c0,.828-.671,1.5-1.5,1.5h-3c-.829,0-1.5-.672-1.5-1.5s.671-1.5,1.5-1.5h3c.829,0,1.5.672,1.5,1.5Zm8,0c0,.828-.672,1.5-1.5,1.5h-3c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5h3c.828,0,1.5.672,1.5,1.5Zm-14-5v-2c0-.828.672-1.5,1.5-1.5h7c.828,0,1.5.672,1.5,1.5v2c0,.828-.672,1.5-1.5,1.5h-7c-.828,0-1.5-.672-1.5-1.5Z"/>
</svg>

);
