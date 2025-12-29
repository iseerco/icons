import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bible = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,0H5c-1.657,0-3,1.343-3,3v15.765c.549-.494,1.262-.766,2-.765h18V2c0-1.105-.895-2-2-2Zm-4,9h-3v5h-2v-5h-3v-2h3v-3h2v3h3v2ZM4,20h18v4H4c-1.105,0-2-.895-2-2s.895-2,2-2Z"/>
</svg>

);
