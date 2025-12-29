import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsModularHome = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5 11h-2.582l-5.8-3.221c1.101-.445 1.882-1.52 1.882-2.779 0-1.105-.605-2.118-1.58-2.644-.559-.301-.92-.96-.92-1.682v-.674h-1v.675c0 1.102.555 2.083 1.446 2.562.65.35 1.054 1.025 1.054 1.763 0 1.103-.897 2-2 2s-2-.897-2-2h-1c0 1.259.781 2.334 1.882 2.779l-5.8 3.221h-2.582c-1.379 0-2.5 1.121-2.5 2.5v10.5h24v-10.5c0-1.379-1.121-2.5-2.5-2.5zm-9.5-2.697 4.856 2.697h-9.712zm-7 14.697v-7h3v7zm18 0h-14v-8h-5v8h-3v-9.5c0-.827.673-1.5 1.5-1.5h19c.827 0 1.5.673 1.5 1.5zm-10-3h7v-5h-7zm1-4h5v3h-5z"/></svg>
);
