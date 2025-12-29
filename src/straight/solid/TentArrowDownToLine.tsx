import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TentArrowDownToLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m5,8.999c.509,0,1.019-.193,1.406-.581l3.299-3.299-1.414-1.414-2.291,2.302V0h-2v5.996L1.709,3.705l-1.414,1.414,3.299,3.299c.388.387.896.581,1.406.581Zm18.604,11.142L14.001,6.241,3.181,22H0v2h8.717l5.284-8,5.285,8h2.148c.935,0,1.795-.499,2.246-1.302.445-.793.43-1.731-.076-2.558Zm-12.49,3.859h5.775l-2.887-4.371-2.887,4.371Z"/>
</svg>

);
