import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLadder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17 0v9h-10v-9h-3v24h3v-2h10v2h3v-24zm0 12v2h-10v-2zm-10 7v-2h10v2zm3.213-14.153-2.212-1.231v-.615h2.899l.784-3h.648l.784 3h2.883v.611l-2.197 1.273.884 2.686-.504.349-2.173-1.68-2.183 1.687-.48-.362.869-2.717z"/></svg>
);
