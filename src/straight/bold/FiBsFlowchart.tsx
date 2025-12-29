import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFlowchart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M6,2v3c0,1.105-.895,2-2,2H2c-1.105,0-2-.895-2-2V2C0,.895,.895,0,2,0h2c1.105,0,2,.895,2,2ZM12,0h-2c-1.105,0-2,.895-2,2v3c0,1.105,.895,2,2,2h2c1.105,0,2-.895,2-2V2c0-1.105-.895-2-2-2ZM4,17H2c-1.105,0-2,.895-2,2v3c0,1.105,.895,2,2,2h2c1.105,0,2-.895,2-2v-3c0-1.105-.895-2-2-2Zm8,0h-2c-1.105,0-2,.895-2,2v3c0,1.105,.895,2,2,2h2c1.105,0,2-.895,2-2v-3c0-1.105-.895-2-2-2Zm10-8h-3c-1.105,0-2,.895-2,2v2c0,1.105,.895,2,2,2h3c1.105,0,2-.895,2-2v-2c0-1.105-.895-2-2-2Zm-3,10h-3v3h3c1.654,0,3-1.346,3-3v-2h-3v2Zm0-12h3v-2c0-1.654-1.346-3-3-3h-3v3h3v2Z"/>
</svg>

);
