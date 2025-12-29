import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrIntegral = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,4.25v.25c0,.828-.671,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-.25c0-.689-.561-1.25-1.25-1.25s-1.25.561-1.25,1.25v15.5c0,2.344-1.907,4.25-4.25,4.25s-4.25-1.906-4.25-4.25v-.25c0-.828.671-1.5,1.5-1.5s1.5.672,1.5,1.5v.25c0,.689.561,1.25,1.25,1.25s1.25-.561,1.25-1.25V4.25c0-2.344,1.907-4.25,4.25-4.25s4.25,1.906,4.25,4.25Z"/>
</svg>

);
