import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Billiard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 6a6 6 0 1 0 6 6 6.006 6.006 0 0 0 -6-6zm2.857 4.515-3 5a1 1 0 1 1 -1.714-1.03l2.091-3.485h-2.234a1 1 0 0 1 0-2h4a1 1 0 0 1 .857 1.515zm-2.857-10.515a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 20a8 8 0 1 1 8-8 8.009 8.009 0 0 1 -8 8z"/></svg>
);
