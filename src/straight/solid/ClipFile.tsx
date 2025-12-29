import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClipFile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,0h-1.556c.345.591.556,1.268.556,2v8.376c0,1.167-.739,2.27-1.873,2.548-1.648.404-3.127-.841-3.127-2.423V2h2v8.5c0,.276.224.5.5.5s.5-.224.5-.5V2.089c0-.873-.512-1.717-1.344-1.984-1.38-.443-2.656.579-2.656,1.895v8h-2V2c0-.732.212-1.409.556-2h-5.556c-1.657,0-3,1.343-3,3v21h20V3c0-1.657-1.343-3-3-3ZM6,13h5.762c.808,1.205,2.182,2,3.738,2H6v-2Zm12,6H6v-2h12v2Z"/>
</svg>

);
