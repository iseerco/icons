import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sad = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0ZM8,8a2,2,0,0,1,2,2c0,1-.895,1-2,1s-2,0-2-1A2,2,0,0,1,8,8Zm9.746,9.667a1,1,0,0,1-1.41.081A7.51,7.51,0,0,0,12,16a7.508,7.508,0,0,0-4.336,1.748,1,1,0,0,1-1.33-1.494A9.454,9.454,0,0,1,12,14a9.454,9.454,0,0,1,5.666,2.254A1,1,0,0,1,17.746,17.667ZM16,11c-1.105,0-2,0-2-1a2,2,0,0,1,4,0C18,11,17.105,11,16,11Z"/></svg>

);
