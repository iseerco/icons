import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NailClipper = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11.516.007-.299.351c-.058.067-1.435 1.643-4.216 1.643s-4.159-1.576-4.211-1.637l-.318-.364h-1.524l.979 19.163c.129 2.712 2.357 4.837 5.073 4.837s4.943-2.125 5.072-4.834l.963-19.166zm-4.516 9.993c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm15.001 10.001c-1.291 1.291-3.358 1.337-4.706.112l-3.124-2.84.518-10.143 7.423 8.165c1.227 1.349 1.178 3.416-.112 4.705z"/></svg>
);
