import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCodeCommit = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,11.5h-5.018c-.257-3.627-3.291-6.5-6.982-6.5s-6.725,2.873-6.982,6.5H0v1H5.018c.257,3.627,3.291,6.5,6.982,6.5s6.725-2.873,6.982-6.5h5.018v-1Zm-12,6.5c-3.309,0-6-2.691-6-6s2.691-6,6-6,6,2.691,6,6-2.691,6-6,6Z"/></svg>

);
