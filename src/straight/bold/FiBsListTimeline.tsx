import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsListTimeline = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4,21c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2ZM2,10c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2ZM2,1C.9,1,0,1.9,0,3s.9,2,2,2,2-.9,2-2S3.1,1,2,1ZM19,0H9l-3,3,3,3h10c1.1,0,2-.9,2-2V2c0-1.1-.9-2-2-2Zm-2,18H9l-3,3,3,3h8c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2Zm5-9H9l-3,3,3,3h13c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2Z"/></svg>

);
