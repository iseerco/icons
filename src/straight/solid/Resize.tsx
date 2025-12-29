import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Resize = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6 18h7v6h-13v-10a3 3 0 0 1 3-3h3zm4-5h-2v3h3v-2a1 1 0 0 0 -1-1zm11-13h-12a3 3 0 0 0 -3 3v8h4a2.951 2.951 0 0 1 1.285.3l5.3-5.3h-3.585v-2h7v7h-2v-3.586l-5.3 5.3a2.951 2.951 0 0 1 .3 1.286v4h11v-15a3 3 0 0 0 -3-3z"/></svg>
);
