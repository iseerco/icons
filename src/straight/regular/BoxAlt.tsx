import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BoxAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 0h-18a3 3 0 0 0 -3 3v21h24v-21a3 3 0 0 0 -3-3zm1 3v2h-7v-3h6a1 1 0 0 1 1 1zm-11-1h2v6h-2zm-8 0h6v3h-7v-2a1 1 0 0 1 1-1zm-1 20v-15h7v3h6v-3h7v15zm13-4h5v2h-5z"/></svg>
);
