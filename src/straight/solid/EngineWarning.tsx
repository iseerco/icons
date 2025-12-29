import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EngineWarning = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,4a8.009,8.009,0,0,0-8,8c.376,10.588,15.626,10.585,16,0A8.009,8.009,0,0,0,12,4Zm1,13H11V15h2Zm0-4H11V7h2Zm8.257,6.637-1.543-1.274a10.052,10.052,0,0,0,0-12.726l1.543-1.274A12.068,12.068,0,0,1,21.257,19.637Zm-18.513,0a12.065,12.065,0,0,1,0-15.274L4.286,5.637a10.052,10.052,0,0,0,0,12.726Z"/></svg>

);
