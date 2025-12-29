import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FirstAidKit = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 9c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm3 6h-2v2h-2v-2h-2v-2h2v-2h2v2h2zm6-10h-5v-4h-8v4h-5c-1.654 0-3 1.346-3 3v15h24v-15c0-1.654-1.346-3-3-3zm-11-2h4v2h-4zm12 18h-20v-13c0-.551.449-1 1-1h18c.551 0 1 .449 1 1z"/></svg>
);
