import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTally4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3,1.5v21c0,.829-.672,1.5-1.5,1.5s-1.5-.671-1.5-1.5V1.5C0,.671.672,0,1.5,0s1.5.671,1.5,1.5ZM22.5,0c-.828,0-1.5.671-1.5,1.5v21c0,.829.672,1.5,1.5,1.5s1.5-.671,1.5-1.5V1.5c0-.829-.672-1.5-1.5-1.5Zm-7,0c-.828,0-1.5.671-1.5,1.5v21c0,.829.672,1.5,1.5,1.5s1.5-.671,1.5-1.5V1.5c0-.829-.672-1.5-1.5-1.5Zm-7,0c-.828,0-1.5.671-1.5,1.5v21c0,.829.672,1.5,1.5,1.5s1.5-.671,1.5-1.5V1.5c0-.829-.672-1.5-1.5-1.5Z"/></svg>

);
