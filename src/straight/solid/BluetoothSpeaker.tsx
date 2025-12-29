import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BluetoothSpeaker = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 14h-4v-2h4zm-.504-6.132-.992-1.736-3.5 2 .992 1.736zm0 10.264-3.5-2-.992 1.736 3.5 2zm-5.496-12.667v15.035c0 2.763-5.657 3.5-9 3.5s-9-.737-9-3.5v-15.035c2.179 1.21 5.784 1.535 9 1.535s6.821-.325 9-1.535zm-8 10.035 3-2.5-4-3h-1v3.283l-1.438-1.345-1.328 1.494 2.268 2.083-2.251 2.082 1.336 1.488 1.414-1.329v3.243h1l4-3-3-2.5zm8-13c0-1.973-5.657-2.5-9-2.5s-9 .527-9 2.5 5.657 2.5 9 2.5 9-.527 9-2.5z"/></svg>
);
