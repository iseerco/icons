import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StarSharpHalfStroke = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.448,23.309l-7.467-5.488-7.467,5.488,2.864-8.863L-.082,8.992h9.214L11.981.114l2.849,8.878h9.214l-7.46,5.453,2.864,8.863Zm-7.467-7.971l3.658,2.689-1.403-4.344,3.683-2.691h-4.548l-1.39-4.331v8.677Z"/>
</svg>

);
