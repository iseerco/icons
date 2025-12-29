import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ListTree = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17 11h7v2h-7zm0 11h7v-2h-7zm-8-20v2h15v-2zm-1 7h6v6h-6v-2h-4v7h4v-2h6v6h-6v-2h-6v-16h-2v-6h6v6h-2v5h4zm-6-5h2v-2h-2zm8 18h2v-2h-2zm0-9h2v-2h-2z"/></svg>
);
