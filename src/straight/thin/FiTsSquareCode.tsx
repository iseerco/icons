import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquareCode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.189,16.811l-3.75-3.75c-.585-.585-.585-1.536,0-2.121l3.75-3.75,.707,.707-3.75,3.75c-.195,.195-.195,.512,0,.707l3.75,3.75-.707,.707Zm9.371-3.75c.585-.585,.585-1.536,0-2.121l-3.75-3.75-.707,.707,3.75,3.75c.195,.195,.195,.512,0,.707l-3.75,3.75,.707,.707,3.75-3.75ZM24,2.5c0-1.378-1.121-2.5-2.5-2.5H2.5C1.121,0,0,1.122,0,2.5V24H24V2.5ZM1,2.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5V23H1V2.5Z"/></svg>

);
