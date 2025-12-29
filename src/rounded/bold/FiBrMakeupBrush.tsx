import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrMakeupBrush = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.984 1.018a3.49 3.49 0 0 0 -4.71-.184l-12.626 10.92c-2.075.473-5.648 1.765-5.648 5.046a7.208 7.208 0 0 0 7.2 7.2c3.282 0 4.573-3.573 5.046-5.648l10.934-12.642a3.488 3.488 0 0 0 -.196-4.692zm-15.784 19.982a4.2 4.2 0 0 1 -4.2-4.2c0-1.094 2.121-1.886 3.681-2.2l2.719 2.719c-.314 1.562-1.106 3.681-2.2 3.681zm13.7-17.24-6.247 7.223-1.637-1.635 7.211-6.236a.469.469 0 0 1 .672.648z"/></svg>
);
