import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleE = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8.538,9.019v2h5c.553,0,1,.448,1,1s-.447,1-1,1h-5v2c0,.551.448,1,1,1h6c.553,0,1,.448,1,1s-.447,1-1,1h-6c-1.654,0-3-1.346-3-3v-6c0-1.654,1.346-3,3-3h6c.553,0,1,.448,1,1s-.447,1-1,1h-6c-.552,0-1,.449-1,1Zm15.5,3c0,6.617-5.383,12-12,12S.038,18.636.038,12.019,5.421.019,12.038.019s12,5.383,12,12Zm-2,0c0-5.514-4.486-10-10-10S2.038,6.505,2.038,12.019s4.486,10,10,10,10-4.486,10-10Z"/></svg>

);
