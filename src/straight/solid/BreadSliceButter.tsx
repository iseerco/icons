import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BreadSliceButter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,1H5C2.243,1,0,3.243,0,6c0,1.563.754,3.04,2,3.979v13.021h20v-13.021c1.246-.939,2-2.416,2-3.979,0-2.757-2.243-5-5-5Zm-2.499,13.156l-3.346,3.345c-.308.309-.718.479-1.155.479s-.847-.17-1.156-.479l-3.345-3.345c-.309-.308-.479-.718-.479-1.155s.17-.848.479-1.156l3.346-3.345c.616-.617,1.693-.618,2.312,0l3.345,3.345c.309.308.479.718.479,1.155s-.17.848-.479,1.156Zm-4.501-3.984l2.829,2.828-2.829,2.828-2.829-2.828,2.829-2.828Z"/>
</svg>

);
