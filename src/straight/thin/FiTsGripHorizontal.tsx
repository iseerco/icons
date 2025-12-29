import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsGripHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6,9.961H0v-4.25c0-.965.785-1.75,1.75-1.75h4.25v6Zm-5-1h4v-4H1.75c-.414,0-.75.336-.75.75v3.25Zm14,1h-6V3.961h6v6Zm-5-1h4v-4h-4v4Zm14,1h-6V3.961h4.25c.965,0,1.75.785,1.75,1.75v4.25Zm-5-1h4v-3.25c0-.414-.336-.75-.75-.75h-3.25v4Zm-13,11H1.75c-.965,0-1.75-.785-1.75-1.75v-4.25h6v6ZM1,14.961v3.25c0,.414.336.75.75.75h3.25v-4H1Zm14,5h-6v-6h6v6Zm-5-1h4v-4h-4v4Zm12.25,1h-4.25v-6h6v4.25c0,.965-.785,1.75-1.75,1.75Zm-3.25-1h3.25c.414,0,.75-.336.75-.75v-3.25h-4v4Z"/></svg>

);
