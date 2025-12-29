import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BellSchool = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10 8a2 2 0 1 1 -2 2 2 2 0 0 1 2-2zm14 2a14.015 14.015 0 0 1 -14 14h-1v-4.051a10 10 0 1 1 9.906-14.474 5 5 0 0 0 -1.629 1.225 8 8 0 1 0 0 6.61 5 5 0 0 0 1.629 1.22 10.005 10.005 0 0 1 -7.906 5.399v2.029a12.019 12.019 0 0 0 10.624-9.025 3 3 0 1 1 2.376-2.933zm-2 0a1 1 0 1 0 -1 1 1 1 0 0 0 1-1z"/></svg>
);
