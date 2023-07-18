import type { Meta, StoryObj } from '@storybook/react'; 
import React from 'react';
import { useState } from 'react';
import { Button, ITopicButtonProps } from './button.component'; 

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Components/Atoms/Button',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: "Primary Button Component for CTAs, Media & Articles."
            },
        },
    },
    argTypes: {
        onClick: { action: 'onClick executed!' },
        // children: {
        //     icon: 'icon icon-arrow-left-24',
        //     size: 28,
        //     tw: 'p-3 bg-white border border-black flex justify-between w-1/5 text-xl',
        // }
    },
}

export default meta;
type Story = StoryObj<typeof Button>;

// const ButtonWithHooks = (args: any) => {
//     const [clickedTopic, setClickedTopic] = useState<string | null>(null);
//     return (
//         <div>
//             <Button
//                 {...args}
//                 onClick={(topicName: React.SetStateAction<string | null>) =>
//                     setClickedTopic(topicName)
//                 }
//             />
//             {clickedTopic && <div>Button has been clicked: {clickedTopic} </div>}
//         </div>
//     );
// }


export const Primary: Story = {
    args: {
        topicName: 'addition',
        icon: 'icon icon-arrow-left-24',
        size: '28px',
        tw: 'p-3 bg-red border border-black flex justify-between w-1/5 text-xl',
    },
  //  render: () => <ButtonWithHooks />,
}


// export const Primary: Story = {
//     args: {
//         topicName: 'addition',
//         icon: 'icon icon-arrow-left-24',
//         size: '28px',
//         tw: 'p-3 bg-white border border-black flex justify-between w-1/5 text-xl',
//     }
// }