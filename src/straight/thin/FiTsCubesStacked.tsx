import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCubesStacked = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,15h-1.5v-5c0-1.103-.897-2-2-2h-1.5V3c0-1.103-.897-2-2-2h-4c-1.103,0-2,.897-2,2v5h-1.5c-1.103,0-2,.897-2,2v5h-1.5c-1.103,0-2,.897-2,2v6h22v-6c0-1.103-.897-2-2-2Zm-3.5-6c.552,0,1,.448,1,1v5h-6v-5c0-.552.448-1,1-1h4ZM9,3c0-.552.448-1,1-1h4c.552,0,1,.448,1,1v5h-6V3Zm-3.5,7c0-.552.448-1,1-1h4c.552,0,1,.448,1,1v5h-6v-5Zm2.5,12H2v-5c0-.552.448-1,1-1h4c.552,0,1,.448,1,1v5Zm7,0h-6v-5c0-.552.448-1,1-1h4c.552,0,1,.448,1,1v5Zm7,0h-6v-5c0-.552.448-1,1-1h4c.552,0,1,.448,1,1v5Z"/>
</svg>

);
