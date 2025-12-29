import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MusicFile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.414 5h-4.414v-4.414zm.586 2v17h-20v-21a3 3 0 0 1 3-3h10v7zm-7 3h-2a2 2 0 0 0 -2 2v3.05a2.577 2.577 0 0 0 -.5-.05 2.5 2.5 0 1 0 2.5 2.5v-5.5h2z"/></svg>
);
