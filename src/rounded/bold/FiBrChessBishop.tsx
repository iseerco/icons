import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrChessBishop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,21h-.8A8.963,8.963,0,0,0,21,15c0-4.962-6.408-10.206-7.879-11.344a2,2,0,1,0-2.262-.014C9.28,4.707,3,9.3,3,15a8.963,8.963,0,0,0,2.3,6H4.5a1.5,1.5,0,0,0,0,3h15a1.5,1.5,0,0,0,0-3ZM6,15c0-3.413,3.726-6.842,5.935-8.453A29.75,29.75,0,0,1,14.38,8.818l-3.043,3.734a1.5,1.5,0,1,0,2.326,1.895l2.687-3.3A7.245,7.245,0,0,1,18,15,6,6,0,0,1,6,15Z"/></svg>

);
