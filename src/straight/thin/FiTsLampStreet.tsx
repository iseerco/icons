import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLampStreet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,15.5c0-4.559-3.58-8.294-8.065-8.522-.503-3.93-3.87-6.978-7.935-6.978C3.589,0,0,3.589,0,8v16h1V8c0-3.859,3.141-7,7-7,3.515,0,6.434,2.606,6.926,5.987-4.42.297-7.926,4.002-7.926,8.513v.5h6v.5c0,1.379,1.121,2.5,2.5,2.5s2.5-1.121,2.5-2.5v-.5h6v-.5Zm-7,1c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5v-.5h3v.5Zm-8.983-1.5c.246-3.756,3.245-6.768,6.983-7.016,0,.005,0,.011,0,.016h1c0-.005,0-.011,0-.016,3.738.248,6.738,3.26,6.984,7.016h-14.967Z"/>
</svg>

);
