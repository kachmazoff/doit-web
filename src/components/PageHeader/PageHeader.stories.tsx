import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PageHeader } from "./PageHeader";

export default {
  title: "PageHeader",
  component: PageHeader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story = (args) => <PageHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
