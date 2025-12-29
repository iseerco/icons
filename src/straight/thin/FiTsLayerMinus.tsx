import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLayerMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,10.533l-12,7.2L0,10.533v-1.166l12,7.2,12-7.2v1.166Zm-.028-3.303L12,.047,.028,7.23l11.972,7.183,11.972-7.183ZM12,1.213l10.028,6.018-10.028,6.017L1.972,7.23,12,1.213Zm12,17.787H15v1h9v-1Zm-12,.867L0,12.667v1.166l12,7.2v-1.166Z"/></svg>

);
