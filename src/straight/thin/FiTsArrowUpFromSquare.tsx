import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowUpFromSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,6.5V24H2V6.5c0-1.378,1.122-2.5,2.5-2.5h.38l-1.112,1.191c-.458,.257-.768,.747-.768,1.309V23H21V6.5c0-.562-.311-1.053-.77-1.309l-1.112-1.191h.381c1.378,0,2.5,1.122,2.5,2.5ZM11.5,1.293v14.707h1V1.293l5.354,5.354,.707-.707L13.061,.439c-.585-.585-1.536-.585-2.121,0L5.439,5.939l.707,.707L11.5,1.293Z"/></svg>

);
