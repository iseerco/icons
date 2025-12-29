import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFootball = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm-1.358 20.886-1.566-4.886-5.129-.007a8.878 8.878 0 0 1 -.832-2.628l4.153-2.927-1.515-4.9a9.087 9.087 0 0 1 2.128-1.531l4.119 2.993 4.119-2.993a9.087 9.087 0 0 1 2.128 1.528l-1.515 4.9 4.153 2.927a8.894 8.894 0 0 1 -.832 2.629l-5.129.009-1.566 4.886a8.939 8.939 0 0 1 -1.358.114 8.939 8.939 0 0 1 -1.358-.114zm4.282-4.886h-5.848l-1.808-5.562 4.732-3.438 4.732 3.438z"/></svg>
);
