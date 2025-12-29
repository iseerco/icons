import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Text = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 0h-18a3 3 0 0 0 -3 3v21h24v-21a3 3 0 0 0 -3-3zm1 22h-20v-19a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-16-16h12v4h-2v-2h-3v8h2v2h-6v-2h2v-8h-3v2h-2z"/></svg>
);
