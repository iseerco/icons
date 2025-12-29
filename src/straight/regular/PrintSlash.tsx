import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PrintSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.758,22l1.242,1.242v.758H5v-3H0v-12c0-1.287.81-2.384,1.948-2.81l1.81,1.81h-.758c-.552,0-1,.448-1,1v10h3v-5h4.758l2,2h-4.758v6h10.758Zm6.242-1h-1.586l1.543,1.543-1.414,1.414L.043,1.457,1.457.043l3.543,3.543V0h14v6h2c1.654,0,3,1.346,3,3v12ZM7,5.586l.414.414h9.586V2H7v3.586Zm13.414,13.414h1.586v-10c0-.552-.448-1-1-1h-11.586l11,11Zm-5.414-7h4v-2h-4v2Z"/>
</svg>

);
