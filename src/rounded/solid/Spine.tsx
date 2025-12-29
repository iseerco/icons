import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Spine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3 3.5c0-.553.448-1 1-1h2.49c.739-1.475 2.25-2.5 4.01-2.5h3c1.76 0 3.271 1.025 4.01 2.5h2.49c.552 0 1 .447 1 1s-.448 1-1 1h-2v2.5h-12v-2.5h-2c-.552 0-1-.447-1-1zm17 16h-2v-2.5h-12v2.5h-2c-.552 0-1 .447-1 1s.448 1 1 1h2.49c.739 1.475 2.25 2.5 4.01 2.5h3c1.76 0 3.271-1.025 4.01-2.5h2.49c.552 0 1-.447 1-1s-.448-1-1-1zm-16-6.5h2v2h12v-2h2c.552 0 1-.447 1-1s-.448-1-1-1h-2v-2h-12v2h-2c-.552 0-1 .447-1 1s.448 1 1 1z"/></svg>
);
