import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Skyscraper = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18 9h-12v-3c0-1.105.895-2 2-2h3v-4h2v4h3c1.105 0 2 .895 2 2zm3 5v10h-18v-10c0-1.654 1.346-3 3-3h12c1.654 0 3 1.346 3 3zm-12 5h-2v3h2zm0-5h-2v3h2zm4 5h-2v3h2zm0-5h-2v3h2zm4 5h-2v3h2zm0-5h-2v3h2z"/></svg>
);
