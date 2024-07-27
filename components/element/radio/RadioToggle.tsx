// pages/index.js
import { COLORS } from '@/styles/color';
import styled from '@emotion/styled';

type RadioToggleProps = {
  selectedOption: 'recommend' | 'plan';
  setSelectedOption: (option: 'recommend' | 'plan') => void;
};

const RadioToggle = ({
  selectedOption,
  setSelectedOption,
}: RadioToggleProps) => {
  return (
    <Container>
      <Highlight position={selectedOption} />
      <RadioButtons>
        <RadioButton
          type="radio"
          id="plan"
          name="option"
          value="plan"
          checked={selectedOption === 'recommend'}
          onClick={() => {
            setSelectedOption('recommend');
          }}
          onChange={() => {
            return;
          }}
        />
        <Label htmlFor="plan" isSelected={selectedOption === 'recommend'}>
          강사 추천
        </Label>
        <RadioButton
          type="radio"
          id="recommend"
          name="option"
          value="recommend"
          checked={selectedOption === 'plan'}
          onClick={() => {
            setSelectedOption('plan');
          }}
          onChange={() => {
            return;
          }}
        />
        <Label htmlFor="recommend" isSelected={selectedOption === 'plan'}>
          맞춤 학습 계획
        </Label>
      </RadioButtons>
    </Container>
  );
};

export default RadioToggle;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 213px;
  height: 42px;
  border-radius: 26px;
  overflow: hidden;
s`;

const Highlight = styled.div<{ position: 'recommend' | 'plan' }>`
  position: absolute;
  top: 4px;
  left: 4px;
  width: ${({ position }) => (position === 'recommend' ? '41%' : '56%')};
  height: 34px;
  background-color: ${COLORS.primary[500]};
  border-radius: 26px;
  transition: transform 0.2s ease-in-out;

  transform: ${({ position }) =>
    position === 'recommend' ? 'translateX(0)' : 'translateX(72%)'};
`;

const RadioButtons = styled.div`
  display: flex;
  gap: 28px;
  position: relative;
  z-index: 2;
`;

const RadioButton = styled.input`
  display: none;
`;

const Label = styled.label<{ isSelected: boolean }>`
  padding: 0;
  cursor: pointer;
  transition: color 0.2s;
  color: ${({ isSelected }) => (isSelected ? '#fff' : COLORS.primary[500])};
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -2%;
`;
