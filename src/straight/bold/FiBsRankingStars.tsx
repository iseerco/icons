import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRankingStars = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m10.213,7.847l-2.212-1.231v-.615h2.899l.784-3h.648l.784,3h2.883v.611l-2.197,1.273.884,2.686-.504.349-2.173-1.68-2.183,1.687-.48-.362.869-2.717Zm7.13-.283l.48.362,2.183-1.687,2.173,1.68.505-.349-.884-2.686,2.197-1.273v-.611h-2.883l-.784-3h-.648l-.784,3h-2.899v.615l2.212,1.231-.869,2.717ZM1.343,13.564l.48.362,2.183-1.687,2.173,1.68.505-.349-.884-2.686,2.197-1.273v-.611h-2.883l-.784-3h-.648l-.784,3H0v.615l2.212,1.231-.869,2.717Zm22.657-.564v11H0v-5c0-1.654,1.346-3,3-3h4c0-1.654,1.346-3,3-3h4c0-1.654,1.346-3,3-3h4c1.654,0,3,1.346,3,3Zm-14,8h4v-5h-4v5Zm-7,0h4v-2H3v2Zm18-8h-4v8h4v-8Z"/>
</svg>

);
