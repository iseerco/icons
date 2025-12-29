import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMugTeaSaucer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,4h-1.5V1H2v13.5c0,1.93,1.57,3.5,3.5,3.5h10c1.93,0,3.5-1.57,3.5-3.5v-.5h5v-6.5c0-1.93-1.57-3.5-3.5-3.5Zm-4.5,10.5c0,.275-.224.5-.5.5H5.5c-.276,0-.5-.225-.5-.5V4h3v3l-1,1v4h5v-4l-1-1v-3h5v10.5Zm5-3.5h-2v-4h1.5c.276,0,.5.225.5.5v3.5ZM.008,20h20.992v3H.008v-3Z"/>
</svg>

);
