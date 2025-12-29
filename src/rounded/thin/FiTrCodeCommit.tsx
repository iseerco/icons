import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrCodeCommit = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.5,11.5h-4.518c-.257-3.627-3.291-6.5-6.982-6.5s-6.725,2.873-6.982,6.5H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5H5.018c.257,3.627,3.29,6.5,6.982,6.5s6.725-2.873,6.982-6.5h4.518c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm-11.5,6.5c-3.309,0-6-2.691-6-6s2.691-6,6-6,6,2.691,6,6-2.691,6-6,6Z"/></svg>

);
