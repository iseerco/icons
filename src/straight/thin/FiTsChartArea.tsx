import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsChartArea = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H2.5c-1.378,0-2.5-1.122-2.5-2.5V0H1V21.5c0,.827,.673,1.5,1.5,1.5H24v1Zm0-13.036l-3.232-3.232c-.943-.944-2.592-.944-3.535,0l-2.232,2.232-4.232-4.232c-.944-.944-2.592-.944-3.535,0L3.087,9.877l-.091,11.123H24V10.964Zm-19.916-.669l3.855-3.855c.566-.566,1.555-.566,2.121,0l4.939,4.939,2.939-2.939c.566-.566,1.555-.566,2.121,0l2.939,2.939v8.622H4.004l.081-9.705Z"/></svg>

);
