/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex, Avatar, Link } from '@theme-ui/components';

const connect = [
    {
        image: '/social/github.png',
        link: 'https://github.com/amarlearning',
    },
    {
        image: '/social/stackoverflow.png',
        link: 'https://stackoverflow.com/users/5816974/amar-prakash-pandey',
    },
    {
        image: '/social/twitter.png',
        link: 'https://twitter.com/iamarpandey',
    },
    {
        image: '/social/linkedin.png',
        link: 'https://in.linkedin.com/in/amarlearning',
    },
    {
        image: '/social/quora.png',
        link: 'https://www.quora.com/profile/Amar-Prakash-Pandey',
    },
    {
        image: '/social/telegram.svg',
        link: 'https://t.me/amarlearning',
    },
];

var connectList = connect.map(function (element) {
    return (
        <Link href={element.link} target="_blank">
            <Avatar
                sx={{ p: [2, 1, 0], mr: 3, cursor: 'pointer' }}
                src={element.image}
            />
        </Link>
    );
});

const Connect = () => (
    <Flex sx={{ mt: [2, 3, 5], flexDirection: `row` }}>{connectList}</Flex>
);

export default Connect;
