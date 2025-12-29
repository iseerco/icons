import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLayerPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,9.367v1.166l-12,7.2L0,10.533v-1.166l12,7.2,12-7.2Zm-12,5.046L.028,7.23,12,.047l11.972,7.184-11.972,7.183ZM1.972,7.23l10.028,6.017,10.028-6.017L12,1.213,1.972,7.23Zm18.028,7.77h-1v4h-4v1h4v4h1v-4h4v-1h-4v-4ZM0,13.833l12,7.2v-1.166L0,12.667v1.166Z"/></svg>

);
