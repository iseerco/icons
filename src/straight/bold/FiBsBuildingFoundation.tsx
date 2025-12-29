import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBuildingFoundation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18 0v4.402l-4.5-2.701v-1.701h-3v1.701l-4.5 2.7v-4.401h-3v19.184l8.139 4.816h1.722l8.139-4.816v-19.184zm-12 9.066 3.223 1.934-3.223 1.934v-3.867zm4.5 8.899-4.5-2.7 4.5-2.7zm0-8.532-4.5-2.7 4.5-2.7zm3 8.532v-5.4l4.5 2.7zm4.5-5.032-3.223-1.934 3.223-1.934v3.867zm-4.5-3.5v-5.399l4.5 2.7-4.5 2.7z"/></svg>
);
