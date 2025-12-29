import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrHandstand = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.5 21.5c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5 1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5zm4.706 2.324c-.716.386-1.638.121-2.029-.618l-3.31-6.206h-3.734l-3.31 6.206c-.391.738-1.313 1.004-2.029.618-.73-.39-1.008-1.299-.617-2.03l3.823-7.169v-13.125c0-.829.672-1.5 1.5-1.5s1.5.671 1.5 1.5v4.5h2v-4.5c0-.829.672-1.5 1.5-1.5s1.5.671 1.5 1.5v13.125l3.823 7.169c.391.731.113 1.64-.617 2.03zm-8.206-14.824v5h2v-5z"/></svg>
);
