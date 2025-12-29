import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SwipeDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m5-.013v7.957l1.639-1.639,1.414,1.414-2.762,2.762c-.694.693-1.824.691-2.518,0L.012,7.719l1.414-1.414,1.574,1.573V-.013h2Zm8,10.013V2.107c0-.996-.681-1.92-1.664-2.08-1.253-.204-2.336.758-2.336,1.973v14.899l-2.252-2.292c-.097-.097-.265-.222-.487-.367-.931-.519-2.157-.313-2.853.619-.667.894-.482,2.169.305,2.958l6.037,6.182h14.25v-10.808l-11-3.192Z"/>
</svg>

);
