import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowAltFromBottom = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.5,21V6h4.5L12.983,.445c-.525-.593-1.442-.593-1.966,0L6,6h4.5v15H3v3H21v-3h-7.5Z"/></svg>

);
