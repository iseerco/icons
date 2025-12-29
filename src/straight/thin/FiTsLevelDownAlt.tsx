import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLevelDownAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,2.5c0-1.379-1.121-2.5-2.5-2.5H0V1H10.5c.827,0,1.5,.673,1.5,1.5v14.5H5.286l5.846,6.39c.348,.388,.847,.61,1.368,.61s1.019-.222,1.366-.608l5.848-6.392h-6.714V2.5Zm.127,20.218l-.003,.004c-.322,.359-.923,.363-1.251-.004l-4.317-4.718h9.889l-4.317,4.718Z"/></svg>

);
