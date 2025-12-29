import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Grate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm3,5v6h-4V2h1c1.654,0,3,1.346,3,3Zm-11,8v9h-3v-9h3Zm-3-2V2h3v9h-3Zm5,2h3v9h-3v-9Zm0-2V2h3v9h-3ZM5,2h1v9H2v-6c0-1.654,1.346-3,3-3Zm-3,17v-6h4v9h-1c-1.654,0-3-1.346-3-3Zm17,3h-1v-9h4v6c0,1.654-1.346,3-3,3Z"/>
</svg>

);
