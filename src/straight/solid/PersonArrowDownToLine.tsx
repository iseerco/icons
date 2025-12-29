import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonArrowDownToLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M2.5,2.5C2.5,1.119,3.619,0,5,0s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5ZM19,18.999c.512,0,1.024-.195,1.414-.585l3.543-3.543-1.414-1.414-2.543,2.543V3h-2v13l-2.543-2.543-1.414,1.414,3.543,3.543c.39,.39,.902,.585,1.414,.585Zm5,3.001v2H0v-2H2v-5H0V9c0-1.654,1.346-3,3-3H7c1.654,0,3,1.346,3,3v8h-2v5H24Zm-20,0h2v-5h-2v5Z"/>
</svg>

);
