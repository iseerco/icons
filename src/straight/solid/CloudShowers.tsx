import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CloudShowers = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,24H13V17h2Zm-4-9H9v7h2ZM7,17H5v7H7Zm12-2H17v7h2Zm5-2.5a7.5,7.5,0,0,1-3,6V15a2,2,0,0,0-2-2H17a2,2,0,0,0-2,2H13a2,2,0,0,0-2-2H9a2,2,0,0,0-2,2H5a2,2,0,0,0-2,2v2.4c-3.55-1.626-4.042-7.147-.735-9.348C-.07.2,13.616-4.039,17.441,5.059A7.461,7.461,0,0,1,24,12.5Z"/></svg>

);
