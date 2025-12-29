import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsChartArrowGrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2.5,23h21.5v1H2.5c-1.378,0-2.5-1.122-2.5-2.5V-.024h1v21.524c0,.827.673,1.5,1.5,1.5ZM24,5.7v6.483l-3.75-3.75-5.762,5.762-2.488-2.488-7.146,7.146-.707-.707,7.854-7.854,2.488,2.488,5.055-5.055-3.726-3.726h6.483c.938,0,1.7.763,1.7,1.7Zm-1,0c0-.386-.314-.7-.7-.7h-4.069l4.769,4.769v-4.069Z"/>
</svg>

);
