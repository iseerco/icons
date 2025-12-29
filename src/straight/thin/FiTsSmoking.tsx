import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSmoking = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0,22h21v-6H0v6Zm20-1h-11v-4h11v4ZM1,17h7v4H1v-4Zm22-1h1v6h-1v-6ZM14,4.856v-2.856h1v2.856c0,1.223.651,2.372,1.699,3.001l1.602.961c1.048.63,1.699,1.78,1.699,3.002v2.18h-1v-2.18c0-.873-.465-1.694-1.214-2.145l-1.602-.961c-1.348-.809-2.185-2.287-2.185-3.858Zm10,5.408v1.735h-1v-1.735c0-1.223-.651-2.372-1.699-3.001l-2.087-1.252c-.749-.45-1.214-1.271-1.214-2.145V0h1v3.867c0,.523.279,1.017.729,1.287l2.086,1.252c1.348.809,2.185,2.287,2.185,3.858Z"/></svg>

);
