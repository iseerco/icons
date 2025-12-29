import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TreasureChest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,0H6C2.691,0,0,2.691,0,6V24H24V6c0-3.309-2.691-6-6-6Zm4,6v3h-2V2.556c1.19,.694,2,1.97,2,3.444Zm-4-4v7h-3c0-1.654-1.346-3-3-3s-3,1.346-3,3h-3V2h12Zm-5,7v4h-2v-4c0-.551,.448-1,1-1s1,.449,1,1ZM4,2.556v6.444H2v-3c0-1.474,.81-2.75,2-3.444ZM20,22V13h-2v9H6V13h-2v9H2V11h7v4h6v-4h7v11h-2Z"/></svg>

);
