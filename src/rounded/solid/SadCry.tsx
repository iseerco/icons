import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SadCry = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C.339.026-4.347,15.052,5,21.733V15a1,1,0,0,1,2,0v7.9a12.008,12.008,0,0,0,10,0V15a1,1,0,0,1,2,0v6.733C28.351,15.047,23.654.024,12,0ZM9,11c0-1.054-.679-2-1-2s-1,.946-1,2a1,1,0,0,1-2,0C5,9.108,6.232,7,8,7s3,2.108,3,4A1,1,0,0,1,9,11Zm3,9c-2.63-.074-2.63-5.927,0-6C14.63,14.074,14.63,19.927,12,20Zm6-8a1,1,0,0,1-1-1c0-1.054-.679-2-1-2s-1,.946-1,2a1,1,0,0,1-2,0c0-1.892,1.232-4,3-4s3,2.108,3,4A1,1,0,0,1,18,12Z"/></svg>

);
