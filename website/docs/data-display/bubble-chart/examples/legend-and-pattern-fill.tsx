import React from 'react';
import {
  Plot,
  Bubble,
  XAxis,
  YAxis,
  ChartLegend,
  makeDataHintsContainer,
} from 'intergalactic/d3-chart';
import { scaleLinear } from 'd3-scale';
import { Text } from 'intergalactic/typography';
import { Flex } from '@semcore/flex-box';

const dataHints = makeDataHintsContainer();

const getDefaultLegendItems = () => {
  return data.map((item, index) => {
    return {
      id: index.toString(),
      label: item.label,
      checked: true,
      color: item.color,
    };
  });
};

const Demo = () => {
  const [legendItems, setLegendItems] = React.useState(getDefaultLegendItems);

  const handleChangeVisible = React.useCallback((id: string, isVisible: boolean) => {
    setLegendItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          item.checked = isVisible;
        }

        return item;
      });
    });
  }, []);

  const MARGIN = 40;
  const width = 500;
  const height = 300;

  const xScale = scaleLinear()
    .range([MARGIN, width - MARGIN])
    .domain([0, 10]);

  const yScale = scaleLinear()
    .range([height - MARGIN, MARGIN])
    .domain([-2, 10]);

  return (
    <Flex direction='column'>
      <ChartLegend
        dataHints={dataHints}
        items={legendItems}
        patterns
        aria-label={'Bubble chart legend'}
        onChangeVisibleItem={handleChangeVisible}
      />
      <Plot
        data={data}
        scale={[xScale, yScale]}
        width={width}
        height={height}
        dataHints={dataHints}
        patterns
      >
        <YAxis>
          <YAxis.Ticks />
          <YAxis.Grid />
        </YAxis>
        <XAxis>
          <XAxis.Ticks />
        </XAxis>
        <Bubble x='x' y='y' value='value' label='label' color='color' />
        <Bubble.Tooltip>
          {({ index }) => {
            return {
              children: (
                <>
                  <Bubble.Tooltip.Title>Data</Bubble.Tooltip.Title>
                  <Text tag='div'>X axis {data[index].x}</Text>
                  <Text tag='div'>Y axis {data[index].y}</Text>
                  <Text tag='div'>Value {data[index].value}</Text>
                </>
              ),
            };
          }}
        </Bubble.Tooltip>
      </Plot>
    </Flex>
  );
};

const data = [
  { x: 2, y: 3, value: 5040, label: 'label 1', color: '#2BB3FF' },
  { x: 1, y: 9, value: 40, label: 'label 2', color: '#59DDAA' },
  { x: 6, y: 2, value: 45634, label: 'label 3', color: '#FF4953' },
  { x: 4, y: 7, value: 245, label: 'label 4', color: '#AB6CFE' },
  { x: 9, y: 5, value: 7462, label: 'label 5', color: '#66C030' },
];

export default Demo;
