import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Table = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,2H5C2.243,2,0,4.243,0,7v10c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5ZM2,8h9v5H2v-5Zm11,0h9v5h-9v-5ZM5,4h14c1.304,0,2.415.836,2.828,2H2.172c.413-1.164,1.524-2,2.828-2Zm-3,13v-2h9v5h-6c-1.654,0-3-1.346-3-3Zm17,3h-6v-5h9v2c0,1.654-1.346,3-3,3Z"/></svg>

);
