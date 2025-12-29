import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PunchingBag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.095 8.146c-.117-.172-4.793-5.647-5.095-6.013v-1.133c0-.553-.448-1-1-1s-1 .447-1 1v1.132s-5.025 5.926-5.042 5.951c-.596.823-.958 1.826-.958 2.918h9c.552 0 1 .447 1 1s-.448 1-1 1h-9v6c0 2.757 2.243 5 5 5h4c2.757 0 5-2.243 5-5v-8.001c0-1.062-.338-2.044-.905-2.854zm-7.76-2.146 1.665-1.956 1.66 1.956z"/></svg>
);
