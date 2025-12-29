import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCreditCardBuyer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m6.5,10c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5ZM24,3.5v11.5c0-2.045-1.237-3.803-3-4.576v-2.424H3v7h11c0,1.131.39,2.162,1.023,3H0V3.5C0,1.57,1.57,0,3.5,0h17c1.93,0,3.5,1.57,3.5,3.5ZM3,5h18v-1.5c0-.276-.225-.5-.5-.5H3.5c-.275,0-.5.224-.5.5v1.5Zm18,14h-4c-1.654,0-3,1.346-3,3v2h10v-2c0-1.654-1.346-3-3-3Zm1-4c0-1.654-1.346-3-3-3s-3,1.346-3,3,1.346,3,3,3,3-1.346,3-3Z"/>
</svg>

);
