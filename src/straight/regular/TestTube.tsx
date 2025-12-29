import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TestTube = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 0h-14v2h2v17a5 5 0 0 0 10 0v-17h2zm-7 22a3 3 0 0 1 -3-3v-10h6v10a3 3 0 0 1 -3 3zm3-15h-6v-5h6z"/></svg>
);
