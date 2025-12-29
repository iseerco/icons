import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSquareE = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9,8.5v2h4.5c.828,0,1.5.671,1.5,1.5s-.672,1.5-1.5,1.5h-4.5v2c0,.276.225.5.5.5h7c.828,0,1.5.671,1.5,1.5s-.672,1.5-1.5,1.5h-7c-1.93,0-3.5-1.57-3.5-3.5v-7c0-1.93,1.57-3.5,3.5-3.5h7c.828,0,1.5.671,1.5,1.5s-.672,1.5-1.5,1.5h-7c-.275,0-.5.224-.5.5Zm15-3v13c0,3.033-2.468,5.5-5.5,5.5H5.5c-3.032,0-5.5-2.467-5.5-5.5V5.5C0,2.467,2.468,0,5.5,0h13c3.032,0,5.5,2.467,5.5,5.5Zm-3,0c0-1.378-1.121-2.5-2.5-2.5H5.5c-1.379,0-2.5,1.122-2.5,2.5v13c0,1.378,1.121,2.5,2.5,2.5h13c1.379,0,2.5-1.122,2.5-2.5V5.5Z"/></svg>

);
