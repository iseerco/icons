import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ConveyorBeltEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.5,15H4.5c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5Zm0,7H4.5c-1.378,0-2.5-1.122-2.5-2.5s1.122-2.5,2.5-2.5h15c1.379,0,2.5,1.122,2.5,2.5s-1.121,2.5-2.5,2.5Zm-13.5-2.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm15,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm-7.5,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Z"/>
</svg>

);
