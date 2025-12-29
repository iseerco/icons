import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrOval = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,20c-6.729,0-12-3.514-12-8S5.271,4,12,4s12,3.514,12,8-5.271,8-12,8Zm0-13c-4.878,0-9,2.29-9,5s4.122,5,9,5,9-2.29,9-5-4.122-5-9-5Z"/>
</svg>

);
