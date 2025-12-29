import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Rec = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 23c-5.122 0-11-1.25-11-11s5.878-11 11-11 11 1.25 11 11-5.878 11-11 11z" opacity=".5"/></svg>
);
