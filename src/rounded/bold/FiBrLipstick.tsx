import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrLipstick = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17 12.351v-3.851a1.5 1.5 0 0 0 -1.5-1.5h-.5v-5.19a1.81 1.81 0 0 0 -2.619-1.618l-1.965.983a2.559 2.559 0 0 0 -1.416 2.29v3.535h-.5a1.5 1.5 0 0 0 -1.5 1.5v3.851a3.5 3.5 0 0 0 -2 3.149v3a5.506 5.506 0 0 0 5.5 5.5h3a5.506 5.506 0 0 0 5.5-5.5v-3a3.5 3.5 0 0 0 -2-3.149zm-7-.351v-2h4v2zm6 6.5a2.5 2.5 0 0 1 -2.5 2.5h-3a2.5 2.5 0 0 1 -2.5-2.5v-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5z"/></svg>
);
