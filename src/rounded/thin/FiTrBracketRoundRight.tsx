import React from 'react';
import type { IconProps } from '../../types';

export const FiTrBracketRoundRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M10.5,24c-.14,0-.29-.06-.38-.18-.18-.21-.15-.53,.06-.7,.05-.04,4.82-4.13,4.82-11.12S10.23,.92,10.18,.88c-.21-.18-.24-.49-.06-.7,.18-.21,.49-.24,.7-.06,.21,.18,5.18,4.42,5.18,11.88s-4.97,11.71-5.18,11.88c-.09,.08-.21,.12-.32,.12Z"/></svg>
);

FiTrBracketRoundRight.displayName = 'FiTrBracketRoundRight';
