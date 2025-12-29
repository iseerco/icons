import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUniformMartialArts = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,5.797c0-1.404-.641-2.705-1.758-3.57-1.312-1.016-3.462-2.227-6.242-2.227H8C5.22,0,3.07,1.211,1.758,2.227c-1.117,.865-1.758,2.166-1.758,3.57v15.203H5v3h14v-3h5V5.797ZM3,18V5.797c0-.469,.217-.905,.594-1.197,.943-.729,2.473-1.6,4.406-1.6h.857l2.013,3.523-2.87,4.975V7h-3v11H3Zm5,3v-5h2.235c-.122,.894-.235,1.996-.235,3h4c0-1.004-.113-2.106-.235-3h2.235v5H8Zm13-3h-2V7h-3v6h-5.403L16.36,3.01c1.763,.099,3.162,.906,4.046,1.589,.377,.292,.594,.729,.594,1.197v12.203Z"/></svg>

);
