import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LineWidth = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5 24h-19a2.5 2.5 0 0 1 -2.5-2.5 2.5 2.5 0 0 1 2.5-2.5h19a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5zm2.5-10a2 2 0 0 0 -2-2h-20a2 2 0 0 0 0 4h20a2 2 0 0 0 2-2zm0-6.5a1.5 1.5 0 0 0 -1.5-1.5h-21a1.5 1.5 0 0 0 -1.5 1.5 1.5 1.5 0 0 0 1.5 1.5h21a1.5 1.5 0 0 0 1.5-1.5zm0-5.5a1 1 0 0 0 -1-1h-22a1 1 0 0 0 0 2h22a1 1 0 0 0 1-1z"/></svg>
);
