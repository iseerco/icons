import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsStarSharpHalf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9.184,9H-.065l7.463,5.441-2.852,8.823,8.454-6.006V-.066l-3.816,9.066Zm2.816,7.742l-5.575,3.961,2.146-6.644-5.568-4.059h6.845l2.152-5.113v11.855Z"/>
</svg>

);
