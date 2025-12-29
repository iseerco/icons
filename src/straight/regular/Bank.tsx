import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bank = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0 22h24v2h-24zm24-14.091v2.091h-3v8h2v2h-22v-2h2v-8h-3v-2.091a3 3 0 0 1 1.563-2.634l9-4.909a2.993 2.993 0 0 1 2.874 0l9 4.909a3 3 0 0 1 1.563 2.634zm-19 10.091h3v-8h-3zm5-8v8h4v-8zm9 0h-3v8h3zm3-2.091a1 1 0 0 0 -.521-.878l-9-4.909a1 1 0 0 0 -.958 0l-9 4.909a1 1 0 0 0 -.521.878v.091h20z"/></svg>
);
