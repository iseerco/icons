import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FilterList = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,5c0-1.654-1.346-3-3-3H3c-1.654,0-3,1.346-3,3v2.37l6,7v4.13l6,4.5v-8.63l6-7v-2.37Zm-2,1.63l-6,7v5.37l-2-1.5v-3.87L2,6.63v-1.63c0-.551.449-1,1-1h12c.551,0,1,.449,1,1v1.63Zm-2,12.37h10v2h-10v-2Zm0-4h10v2h-10v-2Zm10-4v2h-8.192l1.714-2h6.477Z"/>
</svg>

);
