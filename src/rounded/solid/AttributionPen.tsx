import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AttributionPen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,24H1c-.55,0-1-.45-1-1s.45-1,1-1H19c.55,0,1-.45,1-1s-.45-1-1-1h-3c-1.65,0-3-1.35-3-3s1.35-3,3-3h7c.55,0,1,.45,1,1s-.45,1-1,1h-7c-.55,0-1,.45-1,1s.45,1,1,1h3c1.65,0,3,1.35,3,3s-1.35,3-3,3Zm-7.44-11.02l-.61,2.75c-.24,1.09-1.06,1.95-2.14,2.24l-5.23,1.43c-.59,.16-1.01-.56-.58-.99l3.72-3.72c.39-.39,.39-1.02,0-1.41h0c-.39-.39-1.02-.39-1.41,0l-3.72,3.72c-.43,.43-1.15,.01-.99-.58l1.43-5.23c.29-1.07,1.16-1.9,2.24-2.14l2.75-.61,4.54,4.54ZM19.94,2.54c0,.68-.26,1.32-.74,1.8l-6.72,6.72-3.59-3.59L15.6,.74c.99-.99,2.6-.99,3.59,0,.48,.48,.74,1.12,.74,1.79Z"/></svg>

);
