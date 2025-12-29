import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowToRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,5v6.293l-6.146-6.146-.707,.707,5.646,5.646H0v1H21.793l-5.646,5.646,.707,.707,6.146-6.146v6.293h1V5h-1Z"/></svg>

);
