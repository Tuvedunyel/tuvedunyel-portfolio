import React, { FC } from 'react';
import { Heading, useColorModeValue } from '@chakra-ui/react';
import Transition from '../Transition';

const Politiques: FC = () => {
    return (
        <Transition>
            <Heading as='h1' color={ useColorModeValue('purple.900', 'teal.300') }>Politiques de confidentialités</Heading>
        </Transition>
    ) 
};

export default Politiques;