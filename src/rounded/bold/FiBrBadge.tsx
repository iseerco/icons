import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBadge = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.1 8a8 8 0 1 0 -14.1 5.161v7.986a2.847 2.847 0 0 0 4.63 2.226l1.37-1.1 1.369 1.1a2.85 2.85 0 0 0 4.631-2.226v-7.76a7.963 7.963 0 0 0 2.1-5.387zm-8-5a5 5 0 1 1 -5 5 5.006 5.006 0 0 1 5-5zm1.21 16.487a2.088 2.088 0 0 0 -2.626 0l-1.684 1.348v-5.462a7.943 7.943 0 0 0 6 .076v5.386z"/></svg>
);
