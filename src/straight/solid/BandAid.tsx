import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BandAid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5 5v14h-5v-14zm19 14v-14h-5v14zm-7-14v14h-10v-14zm-4 5a1 1 0 1 0 1-1 1 1 0 0 0 -1 1zm-2 4a1 1 0 1 0 -1 1 1 1 0 0 0 1-1zm0-4a1 1 0 1 0 -1 1 1 1 0 0 0 1-1zm4 4a1 1 0 1 0 -1 1 1 1 0 0 0 1-1z"/></svg>
);
