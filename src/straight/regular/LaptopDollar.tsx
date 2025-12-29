import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LaptopDollar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22 16h-2v2h-4.914l-1 1h-4.172l-1-1h-4.914v-10h10v-2h-12v12h-2v3c0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3v-3h-2zm0 5c0 .551-.448 1-1 1h-18c-.552 0-1-.449-1-1v-1h6.086l1 1h5.828l1-1h6.086zm2-12c0 1.654-1.346 3-3 3v2h-2v-2c-1.654 0-3-1.346-3-3h2c0 .551.448 1 1 1h2c.552 0 1-.449 1-1 0-.378-.271-.698-.644-.76l-3.041-.507c-1.342-.223-2.315-1.373-2.315-2.733 0-1.654 1.346-3 3-3v-2h2v2c1.654 0 3 1.346 3 3h-2c0-.551-.448-1-1-1h-2c-.552 0-1 .449-1 1 0 .378.271.698.644.76l3.041.507c1.342.223 2.315 1.373 2.315 2.733z"/></svg>
);
