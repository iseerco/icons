import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowSmallUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.824,10.175l-4.717-4.717c-.61-.609-1.604-.61-2.214,0l-4.717,4.718.707.707,4.617-4.617v12.734h1V6.265l4.617,4.618.707-.707Z"/>
</svg>

);
