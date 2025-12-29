import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGlassEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m1.014,0l1.709,20.787c.148,1.802,1.681,3.213,3.488,3.213h11.459c1.827,0,3.326-1.373,3.486-3.193L22.985,0H1.014Zm17.154,20.544c-.023.26-.237.456-.498.456H6.211c-.258,0-.477-.202-.498-.459L4.271,3h15.439l-1.542,17.544Z"/>
</svg>

);
