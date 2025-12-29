import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FilterList = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,5c0-1.654-1.346-3-3-3H3c-1.654,0-3,1.346-3,3v2.37l6,7v4.13l6,4.5v-8.63l6-7v-2.37Zm-4,14h10v2h-10v-2Zm0-4h10v2h-10v-2Zm10-4v2h-8.192l1.714-2h6.477Z"/>
</svg>

);
