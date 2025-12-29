import React from 'react';
import type { IconProps } from '../../types';

export const FiBsGolfClub: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12.016,24H4.987a5,5,0,0,1-5-5v-5.3A5,5,0,0,1,5.963,8.8L19.2,11.441,21.019.015l2.962.47L21.57,15.655a9.53,9.53,0,0,1-.679,2.554A9.7,9.7,0,0,1,12.016,24ZM4.984,11.707a2,2,0,0,0-1.995,2V19a2,2,0,0,0,2,2h7.029a6.7,6.7,0,0,0,6.129-4A6.813,6.813,0,0,0,18.6,15.21l.127-.8L5.377,11.746A2.014,2.014,0,0,0,4.984,11.707Z"/><rect x="8.227" y="11.683" width={size} height={size} transform="translate(-7.987 22.284) rotate(-78.157)"/></svg>
);

FiBsGolfClub.displayName = 'FiBsGolfClub';
