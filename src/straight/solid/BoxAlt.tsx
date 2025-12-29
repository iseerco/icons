import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BoxAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16 0h5a3 3 0 0 1 3 3v2h-8zm-2 0h-4v9h4zm10 7v17h-24v-17h8v4h8v-4zm-3 12h-5v2h5zm-13-14v-5h-5a3 3 0 0 0 -3 3v2z"/></svg>
);
