import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AuditAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,5v2H5v-2h8Zm-7,6h6v-2h-6v2Zm17,4.764v5.236c0,1.654-1.346,3-3,3H1V0h17c1.654,0,3,1.346,3,3v8.764l2,4ZM3,22h12V2H3v20Zm18-5.764l-2-4V3c0-.551-.448-1-1-1h-1v20h3c.552,0,1-.449,1-1v-4.764Z"/>
</svg>

);
