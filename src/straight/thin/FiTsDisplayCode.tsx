import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDisplayCode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,19V3.5c0-1.379-1.122-2.5-2.5-2.5H2.5C1.122,1,0,2.121,0,3.5v15.5H11.5v3H6v1h12v-1h-5.5v-3h11.5ZM1,3.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5v14.5H1V3.5Zm5.146,6.146c-.195,.195-.195,.512,0,.707l3.75,3.75-.707,.707-3.75-3.75c-.585-.585-.585-1.536,0-2.121l3.75-3.75,.707,.707-3.75,3.75Zm12.414-.707c.585,.585,.585,1.536,0,2.121l-3.75,3.75-.707-.707,3.75-3.75c.195-.195,.195-.512,0-.707l-3.75-3.75,.707-.707,3.75,3.75Z"/></svg>

);
