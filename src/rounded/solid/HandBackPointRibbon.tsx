import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HandBackPointRibbon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,7H3.431c-.412,0-.565-.371-.274-.662l1.312-.838-1.321-.815c-.291-.291-.128-.685,.284-.685H12v3Zm0-5h0c0-1.105-.895-2-2-2s-2,.895-2,2h0s4,0,4,0Zm5.981,8.376l-5.981-1.376h-4v8c0,.552-.448,1-1,1s-1-.448-1-1v-7s-2.788,3.3-2.788,3.3c-1.696,1.985-1.588,4.938,.249,6.794l2.4,2.425c.942,.945,2.22,1.478,3.554,1.481h7.586c2.761,0,5-2.238,5-5v-3.721c0-2.383-1.682-4.435-4.019-4.903Z"/></svg>

);
