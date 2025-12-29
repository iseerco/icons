import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StarSharpHalfStroke = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24.043,8.992h-9.214L11.981.114l-2.849,8.878H-.082l7.46,5.453-2.864,8.863,7.467-5.488,7.467,5.488-2.864-8.863,7.46-5.453Zm-12.062,6.346V6.661l1.39,4.331h4.548l-3.683,2.691,1.403,4.344-3.658-2.689Z"/>
</svg>

);
