import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CastleTower = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 22v-22h-2v3h-2v-3h-2v3h-2v-3h-2v3h-2v-3h-2v22h-3v2h20v-2zm-6-2h-2v-2c0-.552.448-1 1-1s1 .448 1 1zm0-5h-2v-2c0-.552.448-1 1-1s1 .448 1 1zm0-5h-2v-2c0-.552.448-1 1-1s1 .448 1 1z"/></svg>
);
