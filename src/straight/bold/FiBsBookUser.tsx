import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBookUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,14v-2c0-1.105.895-2,2-2h2c1.105,0,2,.895,2,2v2h-6Zm3-5c1.105,0,2-.895,2-2s-.895-2-2-2-2,.895-2,2,.895,2,2,2Zm8-6.5v21.5H5c-2.206,0-4-1.794-4-4V4C1,1.794,2.794,0,5,0h15.5c1.379,0,2.5,1.122,2.5,2.5Zm-3,.5h-10v13h10V3Zm-16,1v12.127c.32-.083.655-.127,1-.127h2V3h-2c-.552,0-1,.449-1,1Zm16,17v-2H5c-.552,0-1,.449-1,1s.448,1,1,1h15Z"/></svg>

);
