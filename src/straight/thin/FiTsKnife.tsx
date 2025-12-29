import React from 'react';
import type { IconProps } from '../../types';

export const FiTsKnife: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22.971,.123c-.669-.27-1.428-.095-1.936,.441L.018,23.274l.734,.68,5.495-5.938c13.494-1.038,17.752-12.731,17.752-15.969v-.366c0-.709-.393-1.307-1.028-1.559Zm.028,1.925c0,2.943-3.803,13.353-15.726,14.86L21.766,1.248c.172-.183,.379-.247,.562-.247,.102,0,.196,.02,.274,.051,.149,.06,.399,.22,.399,.628v.368Z"/></svg>
);

FiTsKnife.displayName = 'FiTsKnife';
