import styled from 'styled-components/native';
import {GeneralStyleProps} from '../types/general.types';
import colors from './colors';

export const Title = styled.Text<GeneralStyleProps>`
  font-weight: ${props => props.fontWeight || 500};
  font-size: 24px;
  line-height: 35px;
  color: ${props => props.color || colors.title};
  text-align: center;
  margin-bottom: ${props => props.marginBottom | 0}px;
  margin-top: ${props => props.marginTop || 0}px;
`;

export const Text = styled.Text<GeneralStyleProps>`
  font-weight: ${props => props.fontWeight || 400};
  font-size: 16px;
  text-align: center;
  color: ${props => props.color || colors.lightGray};
  margin-bottom: ${props => props.marginBottom || 20}px;
  margin-top: ${props => props.marginTop || 0}px;
`;
