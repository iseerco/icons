import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBandAid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11 9.5a1.5 1.5 0 1 1 -1.5-1.5 1.5 1.5 0 0 1 1.5 1.5zm3.5-1.5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5zm-5 5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5zm5 0a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5zm9.5-3.5v5a5.506 5.506 0 0 1 -5.5 5.5h-13a5.506 5.506 0 0 1 -5.5-5.5v-5a5.506 5.506 0 0 1 5.5-5.5h13a5.506 5.506 0 0 1 5.5 5.5zm-5.5 7.5a2.5 2.5 0 0 0 .5-.051v-9.9a2.5 2.5 0 0 0 -.5-.049h-13a2.5 2.5 0 0 0 -.5.051v9.9a2.5 2.5 0 0 0 .5.049z"/></svg>
);
