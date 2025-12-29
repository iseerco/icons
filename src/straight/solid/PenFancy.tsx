import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PenFancy = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7.127,12.4l-4.519,1.004L.113,22.536l6.009-6.009,1.414,1.414-6.009,6.009,9.132-2.495,1.004-4.519-4.536-4.536ZM23.256.742c-.99-.99-2.6-.99-3.59,0l-10.685,10.684,3.59,3.59,10.684-10.684c.479-.48.744-1.117.744-1.795s-.264-1.316-.744-1.795Z"/></svg>

);
