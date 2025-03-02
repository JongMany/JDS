import { palette } from '@repo/tokens';
import { Meta } from '@storybook/react';

export default {
  title: 'Design System/Palette',
} as Meta;

const ColorBox = ({ color, label }: { color: string; label: string }) => {
  const [colorStr, number] = label.split(' ');

  let textColor = '#FFFFFF';
  if (colorStr === 'opacity') {
    textColor = parseInt(number) < 15 ? '#000000' : '#FFFFFF';
  } else {
    textColor = parseInt(number) > 89 ? '#000000' : '#FFFFFF';
  }
  return (
    <div
      style={{
        width: '80px',
        height: '80px',
        backgroundColor:
          colorStr === 'opacity' ? `rgba(0,0,0,${color})` : color,
        borderRadius: '4px',
        margin: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: textColor, // 텍스트 색상을 흰색으로 설정
        fontSize: '12px',
        fontWeight: 'bold',
      }}
    >
      <div>{label}</div>
    </div>
  );
};

const PaletteDisplay: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.entries(palette).map(([group, colors]) => (
        <>
          <h3
            style={{
              width: '100%',
              marginTop: '20px',
              textTransform: 'capitalize',
            }}
          >
            {group} Palette
          </h3>
          {Object.entries(colors).map(([shade, color]) => (
            <ColorBox
              key={`${group}-${shade}`}
              color={color as string}
              label={`${group} ${shade}`}
            />
          ))}
        </>
      ))}
    </div>
  );
};

export const Default = () => <PaletteDisplay />;
