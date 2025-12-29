import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBookMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11,9c0-.829.672-1.5,1.5-1.5h1v-1c0-.829.672-1.5,1.5-1.5s1.5.671,1.5,1.5v1h1c.828,0,1.5.671,1.5,1.5s-.672,1.5-1.5,1.5h-1v1c0,.829-.672,1.5-1.5,1.5s-1.5-.671-1.5-1.5v-1h-1c-.828,0-1.5-.671-1.5-1.5Zm12-3.5v13c0,3.033-2.468,5.5-5.5,5.5H5.5c-2.481,0-4.5-2.019-4.5-4.5V5.5C1,2.467,3.468,0,6.5,0h11c3.032,0,5.5,2.467,5.5,5.5Zm-5.5-2.5h-7.5v12h10V5.5c0-1.378-1.121-2.5-2.5-2.5Zm-13.5,2.5v9.757c.469-.166.974-.257,1.5-.257h1.5V3h-.5c-1.379,0-2.5,1.122-2.5,2.5Zm16,13v-.5H5.5c-.827,0-1.5.673-1.5,1.5s.673,1.5,1.5,1.5h12c1.379,0,2.5-1.122,2.5-2.5Z"/></svg>

);
