import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsStarSharpHalfStroke = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24.046,9h-9.216L11.98.107l-2.85,8.893H-.085l7.463,5.441-2.864,8.863,7.467-5.488,7.467,5.488-2.864-8.863,7.463-5.441Zm-6.503,11.663l-5.543-4.075V3.446l2.1,6.554h6.878l-5.568,4.059,2.134,6.604Z"/>
</svg>

);
