import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GlassWhiskey = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m.018,1l1.799,19.279c.145,1.551,1.429,2.721,2.987,2.721h14.271c1.549,0,2.832-1.162,2.985-2.701l1.931-19.299H.018Zm19.057,20H4.804c-.52,0-.947-.39-.995-.907l-.382-4.093h17.053l-.41,4.1c-.051.513-.479.9-.995.9Zm1.605-7H3.24L2.213,3h19.566l-1.1,11Z"/></svg>

);
