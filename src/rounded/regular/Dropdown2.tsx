import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Dropdown2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M19,4H5C2.243,4,0,6.243,0,9v6c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5v-6c0-2.757-2.243-5-5-5Zm3,11c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3v-6c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v6Zm-2.859-3.059l-2.209,2.173c-.515,.515-1.349,.515-1.864,0l-2.209-2.173c-.537-.528-.163-1.441,.59-1.441h5.102c.753,0,1.127,.913,.59,1.441Z"/>
</svg>

);
