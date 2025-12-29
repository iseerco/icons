import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Medicine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18 5h-12v-5h12zm0 4h-2.01l.01-2h-7.952l-.048 2h-2a3 3 0 0 0 -3 3v12h18v-12a3 3 0 0 0 -3-3zm-2 8h-3v3h-2v-3h-3v-2h3v-3h2v3h3z"/></svg>
);
