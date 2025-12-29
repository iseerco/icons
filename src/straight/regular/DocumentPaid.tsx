import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DocumentPaid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8.1,12h-2.1v8h1.6v-3h.5c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5Zm0,3.4h-.5v-1.8h.5c.496,0,.9.404.9.9s-.404.9-.9.9Zm8.701-3.4h1.6v8h-1.6v-8Zm-4.557,6.526h2.006l.262,1.474h1.488l-1.397-6.807c-.12-.668-.589-1.192-1.346-1.192s-1.281.587-1.385,1.167l-1.372,6.833h1.469l.275-1.474Zm.992-4.82l.638,3.295h-1.261l.624-3.295Zm8.465-1.706h-2.3v8h2.3c1.269,0,2.3-1.031,2.3-2.3v-3.4c0-1.269-1.031-2.3-2.3-2.3Zm.7,5.7c0,.386-.314.7-.7.7s-.7,0-.7,0v-4.802s.314,0,.7,0,.7.314.7.7v3.4ZM2,3c0-.551.449-1,1-1h8v7h7v1h2v-2.414L12.414,0H3C1.346,0,0,1.346,0,3v21h20v-2H2V3Zm11,.414l3.586,3.586h-3.586v-3.586Z"/>
</svg>

);
