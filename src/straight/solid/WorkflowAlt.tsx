import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WorkflowAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.586,15.121v-5.207l4.414-4.414L18.586.086l-3.914,3.914h-5.636C8.783,1.756,6.896,0,4.586,0,2.104,0,.086,2.019.086,4.5c0,1.953,1.258,3.602,3,4.224v7.276H.086v8h8v-8h-3v-7.051c1.731-.195,3.157-1.36,3.724-2.949h4.862l3.914,3.914v5.207c-2,.457-3.5,2.242-3.5,4.379,0,2.481,2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5c0-2.137-1.5-3.922-3.5-4.379Z"/>
</svg>

);
