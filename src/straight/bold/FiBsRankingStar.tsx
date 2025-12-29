import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRankingStar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,16h-4v-4c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v1H3c-1.654,0-3,1.346-3,3v8h24v-5c0-1.654-1.346-3-3-3Zm-11-4h4v9h-4v-9Zm-7,4h4v5H3v-5Zm18,5h-4v-2h4v2ZM10.213,4.847l-2.212-1.231v-.615h2.899l.784-3h.648l.784,3h2.883v.611l-2.197,1.273.884,2.686-.504.349-2.173-1.68-2.183,1.687-.48-.362.869-2.717Z"/>
</svg>

);
