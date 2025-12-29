import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrChartConnected = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,7l-.124,0A8.492,8.492,0,0,0,17,5.124c0-.041,0-.082,0-.124A5,5,0,0,0,7,5c0,.042,0,.083,0,.124A8.492,8.492,0,0,0,5.124,7L5,7A5,5,0,0,0,5,17l.127,0A8.611,8.611,0,0,0,7,18.872c0,.043,0,.085,0,.128a5,5,0,0,0,10,0c0-.041,0-.081,0-.121A8.434,8.434,0,0,0,18.879,17L19,17A5,5,0,0,0,19,7ZM8.989,8.989a4.989,4.989,0,0,0,6.022,0,4.989,4.989,0,0,0,0,6.022,4.989,4.989,0,0,0-6.022,0,4.989,4.989,0,0,0,0-6.022ZM12,3a2,2,0,1,1-2,2A2,2,0,0,1,12,3ZM3,12a2,2,0,1,1,2,2A2,2,0,0,1,3,12Zm9,9a2,2,0,1,1,2-2A2,2,0,0,1,12,21Zm7-7a2,2,0,1,1,2-2A2,2,0,0,1,19,14Z"/></svg>

);
