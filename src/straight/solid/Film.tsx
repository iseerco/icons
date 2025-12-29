import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Film = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22 0v3h-2v-3h-16v3h-2v-3h-2v24h2v-3h2v3h16v-3h2v3h2v-24zm0 5v2h-2v-2zm0 8v2h-2v-2h-16v2h-2v-2h2v-2h-2v-2h2v2h16v-2h2v2h-2v2zm-18-8v2h-2v-2zm-2 14v-2h2v2zm18 0v-2h2v2z"/></svg>
);
