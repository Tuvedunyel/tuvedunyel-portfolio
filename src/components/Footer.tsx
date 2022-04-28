import React, { FC } from 'react';
import { Flex, Center, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const Footer: FC = () => {
    return (
        <footer>
            <Flex>
                <Center>
                    <ul>
                        <li>
                            <Link as={ReachLink} to='/politique'>Politique de confidentialités</Link>
                        </li>
                        <li><Link as={ReachLink} to='mentions'>Mentions légales</Link></li>
                    </ul>
                </Center>
            </Flex>
        </footer>
    );
};

export default Footer;