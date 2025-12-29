import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VideoSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,19.914V4.086l-4,4v-1.086c0-1.654-1.346-3-3-3H5.414L1.457,.043,.042,1.457,22.542,23.957l1.414-1.414-3.956-3.956v-2.673l4,4Zm-4-9l2-2v6.172l-2-2v-2.172Zm-2,5.673L7.413,6h9.587c.552,0,1,.449,1,1v9.587Zm-4.243,1.413l2,2H0V7c0-.765,.297-1.457,.77-1.987l1.426,1.426c-.114,.162-.195,.349-.195,.562v11H13.757Z"/></svg>

);
