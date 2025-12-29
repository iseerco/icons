import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BottleBaby = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M17.887,9.44l-.887-1.014v-2.426c0-1.103-.897-2-2-2h-1.266c.168-.869,.266-1.638,.266-2,0-1.105-.895-2-2-2s-2,.895-2,2c0,.362,.097,1.131,.266,2h-1.266c-1.103,0-2,.897-2,2v2.426l-.887,1.014c-1.362,1.557-2.113,3.554-2.113,5.623v8.937H20V15.063c0-2.069-.75-4.066-2.113-5.623Zm-8.887-3.44h6v2h-6v-2Zm9,16H6v-2h4v-2H6v-2h4v-2h-3.904c.197-1.195,.715-2.32,1.522-3.242l.663-.758h7.438l.663,.758c1.043,1.192,1.618,2.721,1.618,4.306v6.937Z"/>
</svg>

);
