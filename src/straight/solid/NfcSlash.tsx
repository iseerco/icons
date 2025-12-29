import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NfcSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.76,20l3,3H1V5.24l3,3v11.76H15.76ZM6,10.24v7.76h7.76l-3-3h-1.76v-1.76l-3-3Zm17.96,12.3l-1.41,1.41L.04,1.46,1.46,.04l1.26,1.26c.39-.19,.82-.3,1.29-.3H20c1.65,0,3,1.35,3,3V21.59l.96,.96ZM9.41,4H5.41l2,2,2-2Zm5.59,6h-2v1.59l2,2v-3.59Zm5-6h-6.91l-3.84,3.84,1.75,1.75v-.67l2.91-2.91h4.09v10.59l2,2V4Z"/></svg>

);
