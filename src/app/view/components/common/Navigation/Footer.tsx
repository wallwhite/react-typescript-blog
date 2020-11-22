import React from 'react';
import { Flex, Link, IconButton } from '@chakra-ui/react';
import { Github, Linkedin, Mail } from 'app/view/components';

const Footer: React.FunctionComponent = () => (
    <Flex align="center" mb={4} direction="column">
        <div>
            <Link href="https://github.com/wallwhite" title="GitHub" isExternal>
                <IconButton aria-label="GitHub" icon={<Github />} size="lg" color="gray.500" variant="ghost" />
            </Link>
            <Link href="https://www.linkedin.com/in/yaroslav-romanenko-002b21120/" title="GitHub" isExternal>
                <IconButton aria-label="linkedin" icon={<Linkedin />} size="lg" color="gray.500" variant="ghost" />
            </Link>
            <Link href="mailto:yarikrom05@gmail.com" title="GitHub" isExternal>
                <IconButton aria-label="mail" icon={<Mail />} size="lg" color="gray.500" variant="ghost" />
            </Link>
        </div>
    </Flex>
);

export default Footer;
