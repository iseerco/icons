import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TimeAdd = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20 18h4v2h-4v4h-2v-4h-4v-2h4v-4h2zm-9-12v4.586l-2.707 2.707 1.414 1.414 3.293-3.293v-5.414zm-9 6a10 10 0 1 1 19.949 1h2c.028-.331.051-.662.051-1a12 12 0 1 0 -12 12c.338 0 .669-.023 1-.051v-2a9.992 9.992 0 0 1 -11-9.949z"/></svg>
);
