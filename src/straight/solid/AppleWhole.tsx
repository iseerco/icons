import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AppleWhole = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.409,7.026C16.289,8.38,15.893,7.893,13,8V6A9.871,9.871,0,0,0,11.432.473c-.088-.149-.17-.288-.242-.421L9.435,1.01c.081.15.174.308.273.477A7.887,7.887,0,0,1,11,6v.409C5.55,4.563-.067,9.1,0,15c-.107,6.331,6.417,10.953,12,8.2C22.459,27.619,28.793,12.444,19.409,7.026Zm.124-2.54A6.656,6.656,0,0,1,15,6C14.876,2.227,17.165-.187,20.992.008A6.393,6.393,0,0,1,19.533,4.486Z"/></svg>

);
