import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Calculator = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20 0h-16a3 3 0 0 0 -3 3v21h22v-21a3 3 0 0 0 -3-3zm-13 19h-2v-2h2zm0-4h-2v-2h2zm4 4h-2v-2h2zm0-4h-2v-2h2zm8 4h-6v-2h6zm-6-4v-2h2v2zm6 0h-2v-2h2zm0-5h-14v-6h14zm-2-2h-10v-2h10z"/></svg>
);
