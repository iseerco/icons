import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowsFromLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,11v2H0v-2H24Zm-11,10v-6h-2v6l-2.5-2.5-1.414,1.414,3.5,3.5c.39,.39,.902,.585,1.414,.585s1.024-.195,1.414-.585l3.5-3.5-1.414-1.414-2.5,2.5ZM11,3v6h2V3l2.5,2.5,1.414-1.414L13.414,.586c-.779-.779-2.049-.779-2.828,0l-3.5,3.5,1.414,1.414,2.5-2.5Z"/></svg>

);
