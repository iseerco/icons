import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Delete = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 2h-9.044a4.966 4.966 0 0 0 -3.946 1.931l-5.8 7.455a1 1 0 0 0 0 1.228l5.8 7.455a4.966 4.966 0 0 0 3.946 1.931h9.044a5.006 5.006 0 0 0 5-5v-10a5.006 5.006 0 0 0 -5-5zm-1.293 12.293a1 1 0 1 1 -1.414 1.414l-2.293-2.293-2.293 2.293a1 1 0 0 1 -1.414-1.414l2.293-2.293-2.293-2.293a1 1 0 0 1 1.414-1.414l2.293 2.293 2.293-2.293a1 1 0 0 1 1.414 1.414l-2.293 2.293z"/></svg>
);
