import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Glasses = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20 .058a4 4 0 0 0 -4 4h2a2 2 0 0 1 2-2h2v13.025a4.954 4.954 0 0 0 -3-1.025 5.008 5.008 0 0 0 -4.9 4h-4.2a5.008 5.008 0 0 0 -4.9-4 4.954 4.954 0 0 0 -3 1.025v-13.025h2a2 2 0 0 1 2 2h2a4 4 0 0 0 -4-4h-4v19a5 5 0 0 0 9.9 1h4.2a5 5 0 0 0 9.9-1v-19z"/></svg>
);
