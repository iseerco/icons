import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DumbbellWeightlifting = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,2v-1c0-.553-.447-1-1-1s-1,.447-1,1v1H3v-1c0-.553-.447-1-1-1s-1,.447-1,1v1c-.553,0-1,.447-1,1s.447,1,1,1v2c0,.553.447,1,1,1s1-.447,1-1v-2h.974l5.026,7.311v11.689c0,.553.447,1,1,1s1-.447,1-1v-4h2v4c0,.553.447,1,1,1s1-.447,1-1v-11.689l5.026-7.311h.974v1c0,.553.447,1,1,1s1-.447,1-1v-1c.553,0,1-.447,1-1s-.447-1-1-1Zm-12,15v-5h2v5h-2Zm2.474-7h-2.947l-4.125-6h11.197l-4.125,6Zm-3.474-3c0-1.105.895-2,2-2s2,.895,2,2-.895,2-2,2-2-.895-2-2Z"/>
</svg>

);
