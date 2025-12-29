import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrPager = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5,2H5.5C2.468,2,0,4.467,0,7.5v9c0,3.033,2.468,5.5,5.5,5.5h13c3.032,0,5.5-2.467,5.5-5.5V7.5c0-3.033-2.468-5.5-5.5-5.5Zm2.5,14.5c0,1.378-1.121,2.5-2.5,2.5H5.5c-1.379,0-2.5-1.122-2.5-2.5V7.5c0-1.378,1.121-2.5,2.5-2.5h13c1.379,0,2.5,1.122,2.5,2.5v9Zm-2-8.5v2c0,.552-.448,1-1,1H6c-.552,0-1-.448-1-1v-2c0-.552.448-1,1-1h12c.552,0,1,.448,1,1Zm-10,6.5c0,.829-.672,1.5-1.5,1.5h-1c-.828,0-1.5-.671-1.5-1.5s.672-1.5,1.5-1.5h1c.828,0,1.5.671,1.5,1.5Zm5,0c0,.829-.672,1.5-1.5,1.5h-1c-.828,0-1.5-.671-1.5-1.5s.672-1.5,1.5-1.5h1c.828,0,1.5.671,1.5,1.5Zm5,0c0,.829-.672,1.5-1.5,1.5h-1c-.828,0-1.5-.671-1.5-1.5s.672-1.5,1.5-1.5h1c.828,0,1.5.671,1.5,1.5Z"/></svg>

);
