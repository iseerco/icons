import React from 'react';
import type { IconProps } from '../../types';

export const FiTrChartBullet: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,2h-5V.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5v1.5H3C1.35,2,0,3.35,0,5v2c0,1.65,1.35,3,3,3H15v1.5c0,.28,.22,.5,.5,.5s.5-.22,.5-.5v-1.5h5c1.65,0,3-1.35,3-3v-2c0-1.65-1.35-3-3-3ZM1,7v-2c0-1.1,.9-2,2-2h7v6H3c-1.1,0-2-.9-2-2Zm10,2V3h4v6h-4Zm12-2c0,1.1-.9,2-2,2h-5V3h5c1.1,0,2,.9,2,2v2Zm-2,7H11v-1.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5v1.5H3c-1.65,0-3,1.35-3,3v2c0,1.65,1.35,3,3,3h7v1.5c0,.28,.22,.5,.5,.5s.5-.22,.5-.5v-1.5h10c1.65,0,3-1.35,3-3v-2c0-1.65-1.35-3-3-3ZM1,19v-2c0-1.1,.9-2,2-2h2v6H3c-1.1,0-2-.9-2-2Zm5,2v-6h4v6H6Zm17-2c0,1.1-.9,2-2,2H11v-6h10c1.1,0,2,.9,2,2v2Z"/></svg>
);

FiTrChartBullet.displayName = 'FiTrChartBullet';
