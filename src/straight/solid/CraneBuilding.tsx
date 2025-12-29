import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CraneBuilding = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 6v-2h-16.49l-2-2h-.51v-2h-2v2h-1v2h-2v2h2v2h1v14h-3v2h8v-2h-3v-14h3v-2h7.299l-3.273 4h-2.026v2h14v-2h-2.026l-3.273-4zm-9.39 4 2.39-2.921 2.39 2.921h-4.779zm-4.61 4v10h14v-10zm6 7h-3v-3h3zm5 0h-3v-3h3z"/></svg>
);
