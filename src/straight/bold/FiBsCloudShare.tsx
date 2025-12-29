import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCloudShare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8.35 19h-2.55a2.788 2.788 0 0 1 -2.8-2.775 3.025 3.025 0 0 1 2.218-2.792l2.165-.557-1.335-1.792a5.083 5.083 0 0 1 -1.018-3.054 4.935 4.935 0 0 1 5.061-5.03 5.18 5.18 0 0 1 5.129 4.465l.153 1.135 2.609-2.6h-.006a8.2 8.2 0 0 0 -7.885-6 7.96 7.96 0 0 0 -8.061 8.03 8.045 8.045 0 0 0 .69 3.27 5.953 5.953 0 0 0 -2.72 4.925 5.792 5.792 0 0 0 5.8 5.775h4.9a6.027 6.027 0 0 1 -2.35-3z"/><path d="m21 18a2.97 2.97 0 0 0 -1.5.416l-2.477-1.416 2.477-1.416a2.97 2.97 0 0 0 1.5.416 3 3 0 1 0 -3-3.014l-2.5 1.43a2.97 2.97 0 0 0 -1.5-.416 3 3 0 0 0 0 6 2.97 2.97 0 0 0 1.5-.416l2.5 1.43a3 3 0 1 0 3-3.014z"/></svg>
);
