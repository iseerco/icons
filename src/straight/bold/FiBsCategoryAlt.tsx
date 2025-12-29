import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCategoryAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,0H3.5C1.57,0,0,1.57,0,3.5v20.5h24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H3V3.5c0-.276.225-.5.5-.5h17c.275,0,.5.224.5.5v17.5ZM5,5h6v6h-6v-6Zm8,0h6v6h-6v-6ZM5,13h6v6h-6v-6Zm8,0h6v6h-6v-6Z"/>
</svg>

);
