import React from 'react';
import { Box, Flex } from '@semcore/ui/flex-box';
import { Text } from '@semcore/ui/typography';
import Tooltip from '@semcore/ui/tooltip';
import Skeleton from '@semcore/ui/skeleton';
import '@semcore/ui/utils/style/var.css';
import { AnimatedNumber } from '@semcore/ui/counter/src';

const Demo = () => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setLoading(!loading);
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [loading]);

  return (
    <Flex direction='column' style={{ overflow: 'hidden' }}>
      <Box h={92} w={146} mb={6} style={{ borderBottom: '1px solid var(--gray-200)' }}>
        <Tooltip title='Keyword' wMax='100%'>
          <Text size={200} tag='p' noWrap tabIndex={0}>
            Keyword
          </Text>
        </Tooltip>
        {!loading && (
          <>
            <Text size={100} color='gray-500' tag='p'>
              last 30 days
            </Text>
            <Flex alignItems='baseline'>
              <Text
                size={500}
                color='blue-400'
                fontWeight='bold'
                mr={2}
                tag='a'
                href='https://semrush.com'
                target='_blank'
              >
                <AnimatedNumber
                  value={42}
                  formatValue={(x) => Math.round(x).toString()}
                  delay={300}
                />
              </Text>
              <Text size={100} color='gray-500' tag='p'>
                no change
              </Text>
            </Flex>
          </>
        )}
        <Skeleton hidden={!loading} mt={2}>
          <Skeleton.Text amount={1} height={30} width={70} />
        </Skeleton>
      </Box>
      <Box h={92} w={146} mb={6} style={{ borderBottom: '1px solid var(--gray-200)' }}>
        <Tooltip title='Traffic' wMax='100%'>
          <Text size={200} tag='p' noWrap tabIndex={0}>
            Traffic
          </Text>
        </Tooltip>
        {!loading && (
          <>
            <Text size={100} color='gray-500' tag='p'>
              last 30 days
            </Text>
            <Flex alignItems='baseline'>
              <Text
                size={500}
                color='blue-400'
                fontWeight='bold'
                mr={2}
                tag='a'
                href='https://semrush.com'
                target='_blank'
              >
                <AnimatedNumber value={24765} formatValue={(x) => Math.round(x).toString()} />
              </Text>
              <Text size={100} color='gray-500' tag='p'>
                no change
              </Text>
            </Flex>
          </>
        )}
        <Skeleton hidden={!loading} mt={2}>
          <Skeleton.Text amount={1} height={30} width={70} />
        </Skeleton>
      </Box>
      <Box h={92} w={146} mb={6} style={{ borderBottom: '1px solid var(--gray-200)' }}>
        <Tooltip title='Traffic cost' wMax='100%'>
          <Text size={200} tag='p' noWrap tabIndex={0}>
            Traffic cost
          </Text>
        </Tooltip>
        {!loading && (
          <>
            <Text size={100} color='gray-500' tag='p'>
              last 30 days
            </Text>
            <Flex alignItems='baseline'>
              <Text
                size={500}
                color='blue-400'
                fontWeight='bold'
                mr={2}
                tag='a'
                href='https://semrush.com'
                target='_blank'
              >
                <AnimatedNumber value={908} formatValue={(x) => Math.round(x).toString()} />
              </Text>
              <Text size={100} color='green-500' tag='p'>
                ↑+12
              </Text>
            </Flex>
          </>
        )}
        <Skeleton hidden={!loading} mt={2}>
          <Skeleton.Text amount={1} height={30} width={70} />
        </Skeleton>
      </Box>
      <Box h={92} w={146} mb={6} style={{ borderBottom: '1px solid var(--gray-200)' }}>
        <Tooltip title='Branded traffic' wMax='100%'>
          <Text size={200} tag='p' noWrap tabIndex={0}>
            Branded traffic
          </Text>
        </Tooltip>
        {!loading && (
          <>
            <Text size={100} color='gray-500' tag='p'>
              all time
            </Text>
            <Flex alignItems='baseline'>
              <Text
                size={500}
                fontWeight='bold'
                mr={2}
                tag='a'
                href='https://semrush.com'
                target='_blank'
              >
                <AnimatedNumber
                  value={145}
                  formatValue={(x) => Math.round(x).toString()}
                  delay={300}
                />
              </Text>
              <Text size={100} color='green-500' tag='p'>
                ↑+13
              </Text>
            </Flex>
          </>
        )}
        <Skeleton hidden={!loading} mt={2}>
          <Skeleton.Text amount={1} height={30} width={70} />
        </Skeleton>
      </Box>
      <Box h={92} w={146}>
        <Tooltip title='Non-branded traffic' wMax='100%'>
          <Text size={200} tag='p' noWrap tabIndex={0}>
            Non-branded traffic
          </Text>
        </Tooltip>
        {!loading && (
          <>
            <Text size={100} color='gray-500' tag='p'>
              all time
            </Text>
            <Flex alignItems='baseline'>
              <Text
                size={500}
                fontWeight='bold'
                mr={2}
                tag='a'
                href='https://semrush.com'
                target='_blank'
              >
                145
              </Text>
              <Text size={100} color='green-500' mr={2} tag='p'>
                ↑+13
              </Text>
              <Text size={100} color='red-500' tag='p'>
                ↓-12
              </Text>
            </Flex>
          </>
        )}
        <Skeleton hidden={!loading} mt={2}>
          <Skeleton.Text amount={1} height={30} width={70} />
        </Skeleton>
      </Box>
    </Flex>
  );
};

export default Demo;