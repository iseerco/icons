import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrShelvesEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.5,0c-.829,0-1.5.671-1.5,1.5v5.5H3V1.5c0-.829-.671-1.5-1.5-1.5S0,.671,0,1.5v21c0,.829.671,1.5,1.5,1.5s1.5-.671,1.5-1.5v-.5h18v.5c0,.829.671,1.5,1.5,1.5s1.5-.671,1.5-1.5V1.5c0-.829-.671-1.5-1.5-1.5ZM3,19v-9h18v9H3Z"/>
</svg>

);
