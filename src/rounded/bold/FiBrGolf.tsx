import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrGolf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 10a21.7 21.7 0 0 0 -3 .211v-1.271l4.609-1.908c.035-.014.07-.03.1-.047a2.5 2.5 0 0 0 .34-4.256c-.049-.036-4.431-2.464-4.431-2.464a2.5 2.5 0 0 0 -3.618 2.235v8.383c-3.639 1.176-6 3.417-6 6.117 0 3.991 5.159 7 12 7s12-3.009 12-7-5.159-7-12-7zm0 11c-5.151 0-9-2.112-9-4 0-1.025 1.14-2.113 3-2.9v2.4a1.5 1.5 0 0 0 3 0v-3.246a17.713 17.713 0 0 1 3-.254c5.151 0 9 2.112 9 4s-3.849 4-9 4zm5-4a2 2 0 1 1 -2-2 2 2 0 0 1 2 2z"/></svg>
);
