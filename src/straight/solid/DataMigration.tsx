import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DataMigration = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6.414 1 2.586 2.586v6.414h-8v-7c0-1.103.897-2 2-2zm13.332 6h-3.746v2h5c1.103 0 2-.897 2-2v-5h-2v3.102c-1.864-3.098-5.253-5.102-9-5.102-1.131 0-2.219.186-3.243.514l1.638 1.638c.521-.098 1.057-.152 1.606-.152 3.372 0 6.39 2.001 7.746 5zm-15.246 11c3.044 0 4.279-.811 4.5-1.079v-2.421c0-.883-1.85-1.5-4.5-1.5s-4.5.617-4.5 1.5v2.421c.221.268 1.456 1.079 4.5 1.079m0 6c2.859 0 4.5-.79 4.5-2.167v-2.833s-1 1-4.5 1-4.5-1-4.5-1v2.833c0 1.377 1.641 2.167 4.5 2.167m15-6c3.044 0 4.279-.811 4.5-1.079v-2.421c0-.883-1.85-1.5-4.5-1.5s-4.5.617-4.5 1.5v2.421c.221.268 1.456 1.079 4.5 1.079m0 6c2.859 0 4.5-.79 4.5-2.167v-2.833s-1 1-4.5 1-4.5-1-4.5-1v2.833c0 1.377 1.641 2.167 4.5 2.167"/></svg>
);
