import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RoadBarrier = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,3V21c0,.552-.448,1-1,1h0c-.552,0-1-.448-1-1v-6h-5.879l5.879-5.879v-2.828L13.293,15H7.914L18.914,4h3.086v-1c0-.552,.448-1,1-1h0c.552,0,1,.448,1,1Zm-7.914,1h-5.379L2,12.707v-2.828L7.879,4H2v-1c0-.552-.448-1-1-1h0c-.552,0-1,.448-1,1V21c0,.552,.448,1,1,1h0c.552,0,1-.448,1-1v-6h3.086L16.086,4Z"/>
</svg>

);
