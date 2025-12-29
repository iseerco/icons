import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RectangleHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 19.548c-4.802 0-8.861-.739-9.031-.77-.318-.059-.588-.268-.725-.561-.051-.109-1.244-2.706-1.244-6.218 0-3.482 1.192-6.104 1.242-6.214.136-.295.408-.506.727-.564.171-.032 4.239-.77 9.031-.77s8.861.739 9.031.77c.318.059.588.268.725.561.051.109 1.244 2.706 1.244 6.218 0 3.482-1.192 6.104-1.242 6.214-.136.295-.408.506-.727.564-.171.032-4.239.77-9.031.77z" opacity=".5"/></svg>
);
