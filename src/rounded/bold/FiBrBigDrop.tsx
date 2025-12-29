import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBigDrop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M22.5,9h-.5v-2.5c0-1.93-1.57-3.5-3.5-3.5h-3.5L13.038,.43c-.573-.573-1.503-.573-2.077,0l-1.962,2.57h-3.5c-1.93,0-3.5,1.57-3.5,3.5v2.5h-.5c-.829,0-1.5,.671-1.5,1.5s.671,1.5,1.5,1.5h7.5v9h-2.5c-.829,0-1.5,.671-1.5,1.5s.671,1.5,1.5,1.5h11c.829,0,1.5-.671,1.5-1.5s-.671-1.5-1.5-1.5h-2.5V12h7.5c.829,0,1.5-.671,1.5-1.5s-.671-1.5-1.5-1.5ZM5,6.5c0-.276,.224-.5,.5-.5h13c.276,0,.5,.224,.5,.5v2.5H5v-2.5Z"/>
</svg>

);
