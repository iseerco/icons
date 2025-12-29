import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCurveAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m1.5,24c-.829,0-1.5-.672-1.5-1.5s.671-1.5,1.5-1.5c4.566,0,8.439-3.939,9.009-9.163C11.245,5.089,16.4,0,22.5,0c.829,0,1.5.672,1.5,1.5s-.671,1.5-1.5,1.5c-4.566,0-8.439,3.939-9.009,9.163-.736,6.748-5.892,11.837-11.991,11.837Z"/>
</svg>

);
