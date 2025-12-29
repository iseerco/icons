import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSailboat = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m.01,15l.221,1.694c.329,2.526,2.691,7.306,9.27,7.306h5c6.571,0,8.965-4.772,9.312-7.295l.234-1.705H.01Zm14.49,6h-5c-3.407,0-4.987-1.648-5.71-3h16.447c-.737,1.355-2.332,3-5.737,3Zm8.5-8h-11l.009-13,10.991,13Zm-13,0H1L10,3v10Z"/>
</svg>

);
