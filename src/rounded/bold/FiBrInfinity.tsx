import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrInfinity = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18 6c-2.69 0-4.756 1.855-6 3.37-1.244-1.515-3.31-3.37-6-3.37a6 6 0 0 0 0 12c2.69 0 4.756-1.855 6-3.37 1.244 1.515 3.31 3.37 6 3.37a6 6 0 0 0 0-12zm-12 9a3 3 0 0 1 0-6c1.791 0 3.4 1.783 4.239 3-.839 1.217-2.448 3-4.239 3zm12 0c-1.791 0-3.4-1.783-4.239-3 .839-1.217 2.448-3 4.239-3a3 3 0 0 1 0 6z"/></svg>
);
