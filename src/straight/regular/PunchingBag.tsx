import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PunchingBag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.225 7.007-5.225-5.888v-1.119h-2v1.119l-5.225 5.888c-.476.531-.775 1.225-.775 1.993v12c0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3v-12c0-.768-.298-1.462-.775-1.993zm-6.225-4.007 2.681 3h-5.362zm5 18c0 .552-.449 1-1 1h-8c-.551 0-1-.448-1-1v-8h8v-2h-8v-2c0-.552.449-1 1-1h8c.551 0 1 .448 1 1z"/></svg>
);
