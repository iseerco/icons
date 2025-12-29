import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Asterik = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.58 8.536-3.362-5.4-4.945 3.08v-6.216h-6.546v6.216l-4.945-3.08-3.362 5.4 5.563 3.464-5.563 3.464 3.362 5.4 4.945-3.08v6.216h6.546v-6.216l4.945 3.08 3.362-5.4-5.563-3.464z"/></svg>
);
