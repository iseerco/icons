import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Add = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm5 13h-4v4h-2v-4h-4v-2h4v-4h2v4h4z"/></svg>
);
