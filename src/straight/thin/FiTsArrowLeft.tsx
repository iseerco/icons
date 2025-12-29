import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,11.5H1.266l4.617-4.617-.707-.707L.458,10.894c-.61.61-.61,1.604,0,2.215l4.717,4.716.707-.707L1.265,12.5h22.735v-1Z"/>
</svg>

);
