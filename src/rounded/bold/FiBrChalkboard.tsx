import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrChalkboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,18.092v-9.592c0-3.032-2.467-5.5-5.5-5.5H6.5c-3.033,0-5.5,2.468-5.5,5.5v9.592c-.581.207-1,.756-1,1.408,0,.828.671,1.5,1.5,1.5h21c.829,0,1.5-.672,1.5-1.5,0-.652-.419-1.201-1-1.408ZM6.5,6h11c1.378,0,2.5,1.121,2.5,2.5v9.5h-2v-.5c0-.828-.671-1.5-1.5-1.5h-2c-.829,0-1.5.672-1.5,1.5v.5H4v-9.5c0-1.379,1.122-2.5,2.5-2.5Z"/>
</svg>

);
