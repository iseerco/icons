import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Ladder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18 0v10h-12v-10h-2v24h2v-2h12v2h2v-24zm0 12v3h-12v-3zm-12 8v-3h12v3zm4.213-15.153-2.212-1.231v-.615h2.899l.784-3h.648l.784 3h2.883v.611l-2.197 1.273.884 2.686-.504.349-2.173-1.68-2.183 1.687-.48-.362.869-2.717z"/></svg>
);
