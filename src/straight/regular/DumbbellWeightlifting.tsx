import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DumbbellWeightlifting = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,2h-1V0h-2v2H3V0H1v2H0v2h1v2h2v-2h.974l5.026,7.311v12.689h2v-5h2v5h2v-12.689l5.026-7.311h.974v2h2v-2h1v-2Zm-13,15v-5h2v5h-2Zm2.474-7h-2.947l-4.125-6h11.197l-4.125,6Zm-3.474-3c0-1.105.895-2,2-2s2,.895,2,2-.895,2-2,2-2-.895-2-2Z"/>
</svg>

);
