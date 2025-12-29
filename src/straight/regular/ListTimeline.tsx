import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ListTimeline = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,15H9.02l-3-3,3-3h12.98c1.1,0,2,.9,2,2v2c0,1.1-.9,2-2,2Zm-12.15-2h12.15v-2H9.85l-1,1,1,1Zm9.15-7H9.02l-3-3L9.02,0h9.98c1.1,0,2,.9,2,2v2c0,1.1-.9,2-2,2Zm-9.15-2h9.15V2H9.85l-1,1,1,1Zm7.15,20h-7.98l-3-3,3-3h7.98c1.1,0,2,.9,2,2v2c0,1.1-.9,2-2,2Zm-7.15-2h7.15v-2h-7.15l-1,1,1,1Zm-7.85-3c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm0-9c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2ZM2,1C.9,1,0,1.9,0,3s.9,2,2,2,2-.9,2-2S3.1,1,2,1Z"/></svg>

);
