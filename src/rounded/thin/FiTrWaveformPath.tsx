import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrWaveformPath = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18,7.5v9c0,.276-.224.5-.5.5s-.5-.224-.5-.5V7.5c0-.276.224-.5.5-.5s.5.224.5.5ZM13.5,0c-.276,0-.5.224-.5.5v23c0,.276.224.5.5.5s.5-.224.5-.5V.5c0-.276-.224-.5-.5-.5Zm8,4c-.276,0-.5.224-.5.5v15c0,.276.224.5.5.5s.5-.224.5-.5V4.5c0-.276-.224-.5-.5-.5Zm-12,0c-.276,0-.5.224-.5.5v15c0,.276.224.5.5.5s.5-.224.5-.5V4.5c0-.276-.224-.5-.5-.5Zm-4,3c-.276,0-.5.224-.5.5v9c0,.276.224.5.5.5s.5-.224.5-.5V7.5c0-.276-.224-.5-.5-.5Zm-4,2c-.276,0-.5.224-.5.5v5c0,.276.224.5.5.5s.5-.224.5-.5v-5c0-.276-.224-.5-.5-.5Z"/></svg>

);
