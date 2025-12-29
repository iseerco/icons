import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Hairdryer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16 11.63c-3.692 1.436-6.681 2.37-9 2.37-3.86 0-7-3.14-7-7s3.14-7 7-7c2.628 0 6.132 1.074 9 2.152zm2-9.411v9.382l2.983 1.305c1.511.435 3.017-.699 3.017-2.271v-7.271c0-1.537-1.445-2.665-2.936-2.293zm-7.188 13.244c-1.471.366-2.7.537-3.812.537-.715 0-1.407-.093-2.074-.251l2.67 6.53c.594 1.425 2.23 2.099 3.655 1.505s2.099-2.23 1.505-3.655z"/></svg>
);
