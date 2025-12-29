import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrUmbrella = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.7 9.886a12.63 12.63 0 0 0 -10.2-7.786v-.6a1.5 1.5 0 0 0 -3 0v.607a12.831 12.831 0 0 0 -10.2 7.779 4.56 4.56 0 0 0 .508 4.214 4.348 4.348 0 0 0 3.569 1.9h6.123v4.25a.75.75 0 0 1 -1.495.086 1.5 1.5 0 0 0 -2.983.328 3.75 3.75 0 0 0 7.478-.414v-4.25h6.123a4.348 4.348 0 0 0 3.569-1.9 4.56 4.56 0 0 0 .508-4.214zm-2.978 2.514a1.335 1.335 0 0 1 -1.1.6h-15.245a1.335 1.335 0 0 1 -1.1-.6 1.54 1.54 0 0 1 -.177-1.446 9.749 9.749 0 0 1 8.908-5.954 9.736 9.736 0 0 1 8.892 5.954 1.54 1.54 0 0 1 -.178 1.446z"/></svg>
);
