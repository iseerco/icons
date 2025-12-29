import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileBackup = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.5 5c3.044 0 4.279-.811 4.5-1.079v-2.421c0-.883-1.85-1.5-4.5-1.5s-4.5.617-4.5 1.5v2.421c.221.268 1.456 1.079 4.5 1.079m-9.7 4-4.8 15h-2v-19c0-1.654 1.346-3 3-3h3.236l3.764 1.882v5.118zm17.2 2-3.6 13h-16.314l4.133-13zm-11.974-2c-.006-.057-.026-.108-.026-.167v-2.833s1 1 4.5 1 4.5-1 4.5-1v2.833c0 .059-.02.11-.026.167z"/></svg>
);
