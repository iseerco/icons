import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsShieldExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.5 17.989h-3v-3h3zm-.543 5.556c2.121-.854 9.043-4.211 9.043-11.581v-6.164a3.382 3.382 0 0 0 -2.321-3.21l-7.679-2.545-7.679 2.545a3.382 3.382 0 0 0 -2.321 3.21v6.162c0 6.515 6.851 10.449 8.951 11.5l.985.494zm5.777-18.107a.378.378 0 0 1 .266.362v6.162c0 5.258-5.029 7.894-6.932 8.7-1.926-1-7.068-4.1-7.068-8.7v-6.162a.384.384 0 0 1 .266-.364l6.734-2.231zm-5.234-.438h-3v8h3z"/></svg>
);
