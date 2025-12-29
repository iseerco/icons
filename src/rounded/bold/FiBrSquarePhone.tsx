import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSquarePhone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5 0h-13c-3.032 0-5.5 2.467-5.5 5.5v13c0 3.033 2.468 5.5 5.5 5.5h13c3.032 0 5.5-2.467 5.5-5.5v-13c0-3.033-2.468-5.5-5.5-5.5zm2.5 18.5c0 1.378-1.121 2.5-2.5 2.5h-13c-1.379 0-2.5-1.122-2.5-2.5v-13c0-1.378 1.121-2.5 2.5-2.5h13c1.379 0 2.5 1.122 2.5 2.5zm-2.857-3.445c.475.475.475 1.246 0 1.721l-.774.857c-.586.588-1.36.866-2.13.866l-.002-.002c-3.956 0-9.738-5.477-9.738-9.738 0-.77.279-1.543.866-2.13l.857-.774c.475-.475 1.246-.475 1.721 0l1.195 1.517c.475.475.475 1.246 0 1.721l-1.124 1.356c.96 2.39 2.323 3.687 4.529 4.529l1.356-1.124c.475-.475 1.246-.475 1.721 0l1.522 1.199z"/></svg>
);
