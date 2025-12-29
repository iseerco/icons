import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartTreeMap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,9H13v6h9c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2Zm0,4h-7v-2h7v2Zm0-13H13V6h9c1.1,0,2-.9,2-2V2c0-1.1-.9-2-2-2Zm0,4h-7V2h7v2Zm0,14H13v6h9c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2Zm0,4h-7v-2h7v2ZM8,13H3c-1.65,0-3,1.35-3,3v8H11v-8c0-1.65-1.35-3-3-3Zm1,9H2v-6c0-.55,.45-1,1-1h5c.55,0,1,.45,1,1v6ZM8,0H3C1.35,0,0,1.35,0,3V11H11V3c0-1.65-1.35-3-3-3Zm1,9H2V3c0-.55,.45-1,1-1h5c.55,0,1,.45,1,1v6Z"/></svg>

);
