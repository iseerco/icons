import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLipstick = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17 12v-5h-2v-5.427a1.571 1.571 0 0 0 -2.274-1.406l-2.462 1.233a2.27 2.27 0 0 0 -1.264 2.043v3.557h-2v5h-2v12h14v-12zm-7-2h4v2h-4zm6 11h-8v-6h8z"/></svg>
);
