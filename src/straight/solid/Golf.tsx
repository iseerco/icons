import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Golf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 10c-.685 0-1.349.04-2 .1v6.9h-2v-8.947l6.915-3.494-6.015-4.347a2 2 0 0 0 -2.9 1.788v8.922c-3.608 1.193-6 3.439-6 6.078 0 3.925 5.271 7 12 7s12-3.075 12-7-5.271-7-12-7zm3 9a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z"/></svg>
);
