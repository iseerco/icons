import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Doctor = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 5h-5v-4h-8v4h-5a3 3 0 0 0 -3 3v15h24v-15a3 3 0 0 0 -3-3zm-11-2h4v2h-4zm6 12h-3v3h-2v-3h-3v-2h3v-3h2v3h3z"/></svg>
);
