import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSitemap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.5,17.06v-1.56c0-3.03-2.47-5.5-5.5-5.5h-3.5v-3.06c.86-.22,1.5-1.01,1.5-1.94V3c0-1.1-.9-2-2-2h-2c-1.1,0-2,.9-2,2v2c0,.93,.64,1.71,1.5,1.94v3.06h-3.5c-3.03,0-5.5,2.47-5.5,5.5v1.56c-.86,.22-1.5,1.01-1.5,1.94v2c0,1.1,.9,2,2,2h2c1.1,0,2-.9,2-2v-2c0-.93-.64-1.71-1.5-1.94v-1.56c0-1.38,1.12-2.5,2.5-2.5h3.5v4.06c-.86,.22-1.5,1.01-1.5,1.94v2c0,1.1,.9,2,2,2h2c1.1,0,2-.9,2-2v-2c0-.93-.64-1.71-1.5-1.94v-4.06h3.5c1.38,0,2.5,1.12,2.5,2.5v1.56c-.86,.22-1.5,1.01-1.5,1.94v2c0,1.1,.9,2,2,2h2c1.1,0,2-.9,2-2v-2c0-.93-.64-1.71-1.5-1.94Z"/></svg>

);
