import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMarsStrokeRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.707,11.293l-3.707-3.793v3h-2v-2.5h-3v2.5h-1.162c-.689-3.141-3.493-5.5-6.838-5.5C3.14,5,0,8.14,0,12s3.14,7,7,7c3.345,0,6.149-2.359,6.838-5.5h1.162v2.5h3v-2.5h2v3l3.707-3.793c.39-.39,.39-1.024,0-1.414ZM7,16c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Z"/></svg>

);
