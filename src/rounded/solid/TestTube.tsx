import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TestTube = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5 1a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2h-1v5h-10v-5h-1a1 1 0 0 1 -1-1zm2 8v10a5 5 0 0 0 10 0v-10z"/></svg>
);
