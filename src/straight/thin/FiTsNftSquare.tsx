import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsNftSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M11.999,.026L1,6.082v11.934l11.001,5.977,10.999-6.016V6.043L11.999,.026Zm10.001,17.357l-10.001,5.47L2,17.421V6.673L12.001,1.167l9.999,5.469v10.748Zm-5.5-7.383h-1.5v-1h4v1h-1.5v5h-1v-5Zm-5.5-1h3v1h-2v1.5h2v1h-2v2.5h-1v-6Zm-2.5,0h1v6h-.911l-2.089-3.798v3.798h-1v-6h.931l2.069,3.763v-3.763Z"/>
</svg>

);
