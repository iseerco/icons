import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserInjured = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.91,7c-.478,2.833-2.942,5-5.91,5s-5.431-2.167-5.91-5h11.819Zm.006-2c-.167-.979-.573-1.877-1.154-2.636l-3.912,2.636h5.066Zm-8.464,0L15.283.984c-.944-.62-2.072-.984-3.283-.984-2.967,0-5.431,2.167-5.91,5h3.362Zm7.048,9h-4.38l1.6,6h3.28v4h4v-5.5c0-2.481-2.019-4.5-4.5-4.5Zm-9,0h2.395l2.105,8h3v2H6c-1.654,0-3-1.346-3-3v-2.5c0-2.481,2.019-4.5,4.5-4.5Z"/>
</svg>

);
