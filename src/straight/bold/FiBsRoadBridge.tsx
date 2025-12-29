import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRoadBridge = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5 0h-6c-1.93 0-3.5 1.57-3.5 3.5v20.5h13v-20.5c0-1.93-1.57-3.5-3.5-3.5zm.5 21h-7v-17.5c0-.276.225-.5.5-.5h6c.275 0 .5.224.5.5zm-5-17h3v4h-3zm0 6h3v4h-3zm0 6h3v4h-3zm-16-16v13.896l1.365.124c2.072.187 3.635 1.898 3.635 3.98v6h3v-6c0-1.005.385-1.914 1-2.618v-3.697c-.977.466-1.819 1.16-2.484 2-.879-1.125-2.093-1.978-3.516-2.395v-3.29h6v-5c.103-1.133.574-2.169 1.261-3zm3 5v-2h3v2z"/></svg>
);
