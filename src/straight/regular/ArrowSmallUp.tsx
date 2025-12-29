import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowSmallUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M17.707,9.879,13.414,5.586a2,2,0,0,0-2.828,0L6.293,9.879l1.414,1.414L11,8V19h2V8l3.293,3.293Z"/></g></svg>

);
