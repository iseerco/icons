import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RectangleVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 23c-3.482 0-6.104-1.192-6.214-1.242-.295-.136-.506-.408-.564-.727-.032-.171-.77-4.239-.77-9.031s.739-8.861.77-9.031c.059-.318.268-.588.561-.725.109-.051 2.706-1.244 6.218-1.244 3.481 0 6.104 1.192 6.214 1.242.295.136.506.408.564.727.031.171.771 4.239.771 9.031s-.739 8.861-.771 9.031c-.059.318-.268.588-.561.725-.108.051-2.706 1.244-6.218 1.244z" opacity=".5"/></svg>
);
