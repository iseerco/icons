import React from 'react';
import type { IconProps } from '../../types';

export const GlassWhiskey: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m.018,1l1.799,19.279c.145,1.551,1.429,2.721,2.987,2.721h14.271c1.549,0,2.832-1.162,2.985-2.701l1.931-19.299H.018Zm19.057,20H4.804c-.52,0-.947-.39-.995-.907l-.382-4.093h17.053l-.41,4.1c-.051.513-.479.9-.995.9Zm1.605-7H3.24L2.213,3h19.566l-1.1,11Z"/></svg>
);

GlassWhiskey.displayName = 'GlassWhiskey';
