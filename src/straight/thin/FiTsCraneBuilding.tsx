import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCraneBuilding = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 5v-1h-17.197l-2-2h-.803v-2h-1v2h-1v2h-2v1h2v2h1v16h-2v1h7v-1h-2v-16h1v-2h9.354l-4.091 5h-2.263v3h14v-3h-2.263l-4.091-5zm-19 18h-1v-16h1zm1-17h-3v-3h1.389l1.611 1.611zm17 6h-12v-1h12zm-9.445-2 3.445-4.21 3.445 4.21zm-.555 11h3v-3h-3zm1-2h1v1h-1zm4 2h3v-3h-3zm1-2h1v1h-1zm-9 5h14v-9h-14zm1-8h12v7h-12z"/></svg>
);
