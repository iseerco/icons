import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTurnLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,11.5v10.5h-3v-10.5c0-.276-.225-.5-.5-.5H4.653l4.412,4.443-2.129,2.114L.759,11.336c-.487-.487-.759-1.141-.759-1.836s.271-1.349.763-1.84L6.936,1.443l2.129,2.114-4.412,4.443h15.847c1.93,0,3.5,1.57,3.5,3.5Z"/>
</svg>

);
