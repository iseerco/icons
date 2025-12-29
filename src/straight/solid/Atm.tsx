import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Atm = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6 6h4v4h-4zm8.5 11.5c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5c0-.171.018-.338.05-.5h-3.55v7h12v-7h-3.55c.033.162.05.329.05.5zm6.5-17.5h-18c-1.654 0-3 1.346-3 3v17h4v-5h16v5h4v-17c0-1.654-1.346-3-3-3zm-9 12h-8v-8h8zm4 0h-2v-2h2zm0-3h-2v-2h2zm0-3h-2v-2h2zm4 6h-2v-2h2zm0-3h-2v-2h2zm0-3h-2v-2h2z"/></svg>
);
