import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrButter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.5,16h-.5V6.5c0-2.481-2.019-4.5-4.5-4.5H5.5C3.019,2,1,4.019,1,6.5v9.5h-.5c-.276,0-.5.224-.5.5s.224.5.5.5h.5v.5c0,1.93,1.57,3.5,3.5,3.5h15c1.93,0,3.5-1.57,3.5-3.5v-.5h.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-5-13c1.93,0,3.5,1.57,3.5,3.5v9.5h-3V6.5c0-1.421-.675-2.675-1.706-3.5h1.206Zm-13,0h9c1.93,0,3.5,1.57,3.5,3.5v9.5H2V6.5c0-1.93,1.57-3.5,3.5-3.5Zm14,17H4.5c-1.379,0-2.5-1.121-2.5-2.5v-.5h20v.5c0,1.379-1.121,2.5-2.5,2.5Z"/>
</svg>

);
