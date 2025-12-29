import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BluetoothMouse = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20 11h-1v-3.243l-1.414 1.329-1.336-1.488 2.251-2.082-2.268-2.083 1.328-1.494 1.438 1.345v-3.284h1l4 3-3 2.5 3 2.5-4 3zm-13-8h2v-3h-2v3h-2.5c-2.481 0-4.5 2.019-4.5 4.5v2.558h7zm8.771 7.058-1.771-1.972v-4.324c-.716-.48-1.575-.762-2.5-.762h-2.5v7.058zm-15.771 5.942c0 4.411 3.589 8 8 8s8-3.589 8-8v-3.942h-16z"/></svg>
);
