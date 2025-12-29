import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDepartmentStructure = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8.5,4v-2c0-1.105.895-2,2-2h3c1.105,0,2,.895,2,2v2c0,1.105-.895,2-2,2h-3c-1.105,0-2-.895-2-2Zm-3.5,14h-3c-1.105,0-2,.895-2,2v2c0,1.105.895,2,2,2h3c1.105,0,2-.895,2-2v-2c0-1.105-.895-2-2-2Zm8.5,0h-3c-1.105,0-2,.895-2,2v2c0,1.105.895,2,2,2h3c1.105,0,2-.895,2-2v-2c0-1.105-.895-2-2-2Zm8.5,0h-3c-1.105,0-2,.895-2,2v2c0,1.105.895,2,2,2h3c1.105,0,2-.895,2-2v-2c0-1.105-.895-2-2-2ZM5,13.5h5.5v2.5h3v-2.5h5.5v2.5h3v-2.5c0-1.654-1.346-3-3-3h-5.5v-2.5h-3v2.5h-5.5c-1.654,0-3,1.346-3,3v2.5h3v-2.5Z"/>
</svg>

);
