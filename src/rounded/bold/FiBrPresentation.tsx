import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrPresentation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.5 13h-.5v-7.5a5.506 5.506 0 0 0 -5.5-5.5h-9a5.506 5.506 0 0 0 -5.5 5.5v7.5h-.5a1.5 1.5 0 0 0 0 3h9v3h-1.5a3.5 3.5 0 0 0 -3.5 3.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 3.5 3.5 0 0 0 -3.5-3.5h-1.5v-3h9a1.5 1.5 0 0 0 0-3zm-17.5-7.5a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5v7.5h-14z"/></svg>
);
