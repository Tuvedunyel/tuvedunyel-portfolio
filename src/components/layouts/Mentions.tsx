import { Heading, useColorModeValue } from '@chakra-ui/react';
import React, { FC } from 'react';
import Transition from '../Transition';

const Mentions: FC = () => {
    return (
        <Transition>
            <Heading as='h1' color={useColorModeValue('purple.900', 'teal.300')}>Mentions légales</Heading>
        </Transition>
    );
};

export default Mentions;