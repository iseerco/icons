import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FamilyLaw = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6 6v-.336l1.5-4.664h3.5v-1h2v1h3.5l1.5 4.664v.336c0 1.104-.895 2-2 2s-2-.896-2-2v-.336l.842-2.664h-1.842v6h3v2h-8v-2h3v-6h-1.842l.842 2.664v.336c0 1.104-.895 2-2 2s-2-.896-2-2zm10.5 8.5c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5-1.119-2.5-2.5-2.5-2.5 1.119-2.5 2.5zm5 3.5h-3.5c-1.379 0-2.5 1.122-2.5 2.5v1c0-1.378-1.121-2.5-2.5-2.5h-2c-1.379 0-2.5 1.122-2.5 2.5v-1c0-1.378-1.121-2.5-2.5-2.5h-3.5c-1.379 0-2.5 1.122-2.5 2.5v3.5h24v-3.5c0-1.378-1.121-2.5-2.5-2.5zm-17-1c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5-2.5 1.119-2.5 2.5 1.119 2.5 2.5 2.5zm5.5-1c0 1.105.895 2 2 2s2-.895 2-2-.895-2-2-2-2 .895-2 2z"/></svg>
);
