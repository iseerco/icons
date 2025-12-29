import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsClockFuturePast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M3,12H0C0,5.383,5.383,0,12,0c3.25,0,6.272,1.296,8.485,3.515l2.515-2.515V6.909c0,.602-.487,1.09-1.089,1.091h-5.911l2.356-2.356c-1.66-1.664-3.919-2.644-6.356-2.644C7.038,3,3,7.038,3,12Zm18,0c0,4.963-4.037,9-9,9-2.437,0-4.696-.98-6.356-2.644l2.356-2.356H2.089c-.602,0-1.09,.489-1.089,1.091v5.909l2.515-2.515c2.213,2.219,5.235,3.515,8.485,3.515,6.617,0,12-5.383,12-12h-3ZM10.5,6v6.569l5.214,3.208,1.572-2.555-3.786-2.33V6h-3Z"/>
</svg>

);
