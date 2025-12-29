import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFeeReceipt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,0H5.5c-1.378,0-2.5,1.122-2.5,2.5v21.519l3.315-2.013,2.851,1.984,2.833-1.971,2.833,1.972,2.852-1.983,3.315,2.017V2.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,22.245l-2.351-1.431-2.815,1.958-2.833-1.972-2.833,1.971-2.814-1.959-2.353,1.429V2.5c0-.827.673-1.5,1.5-1.5h13c.827,0,1.5.673,1.5,1.5v19.745ZM6,5h3.5v1h-2.5v2.5h2.5v1h-2.5v3.5h-1V5Zm9,0h3.5v1h-2.5v2.5h2.5v1h-2.5v2.5h2.5v1h-3.5V5Zm-4.5,0h3.5v1h-2.5v2.5h2.5v1h-2.5v2.5h2.5v1h-3.5V5Z"/>
</svg>

);
