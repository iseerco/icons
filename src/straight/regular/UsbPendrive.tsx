import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UsbPendrive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M19,8.184V0H5V8.184A3,3,0,0,0,3,11v4a9,9,0,0,0,18,0V11A3,3,0,0,0,19,8.184ZM7,2H17V8H7ZM19,15A7,7,0,0,1,5,15V11a1,1,0,0,1,1-1H18a1,1,0,0,1,1,1Z"/><rect x="13" y="4" width="2" height="2"/><rect x="9" y="4" width="2" height="2"/></g></svg>

);
