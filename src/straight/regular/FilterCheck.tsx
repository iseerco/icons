import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FilterCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 14.482c.616.412 1.289.743 2 .995v8.523l-6-4.5v-5.12l-8-9v-2.38c0-1.654 1.346-3 3-3h8.349c-.706.571-1.325 1.244-1.831 2h-6.518c-.552 0-1 .449-1 1v1.619l8 9v4.881l2 1.5zm12-7.482c0 3.86-3.141 7-7 7s-7-3.14-7-7 3.141-7 7-7 7 3.14 7 7zm-2 0c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5zm-2.411-2.307-3.228 3.174-1.63-1.58-1.393 1.437 1.845 1.788c.314.315.733.489 1.179.489s.865-.174 1.173-.482l3.456-3.399-1.402-1.426z"/></svg>
);
