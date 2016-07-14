/* eslint-disable indent */
/* eslint-disable react/display-name */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { MENU_DROPDOWN } from '../../utilities/constants';
import Dropdown from '../../components/menu-dropdown';
import Button from '../../components/button';
import Trigger from '../../components/menu-dropdown/button-trigger';

const options = [
	{ label: 'An option that is Super Super Long', value: 'A0' },
	{ label: 'Another option', value: 'B0' },
	{ label: 'C Option', value: 'C0' },
	{ label: 'D Option', value: 'D0' },
	{ label: 'E Option', value: 'E0' },
	{ label: 'A1 Option', value: 'A1' },
	{ label: 'B2 Option', value: 'B1' },
	{ label: 'C2 Option', value: 'C1' },
	{ label: 'D2 Option', value: 'D1' },
	{ label: 'E2 Option Super Super Long', value: 'E1' }
];

const getDropdown = (props) => (
	<Dropdown {...props} />
);

const getDropdownCustomTrigger = (props) => (
	<Dropdown {...props} >
		<Trigger>
			<Button iconCategory="utility" iconName="settings" />
		</Trigger>
	</Dropdown>
);

storiesOf(MENU_DROPDOWN, module)
	.addDecorator(getStory => <div className="slds-p-around--medium slds-text-align--center">{getStory()}</div>)
	.add('Base', () => getDropdown({
		align: 'right',
		label: 'Dropdown Click',
		onSelect: (...rest) => {
			action('Selected')(...rest);
		},
		options
	}))
	.add('No Modal', () => getDropdown({
		align: 'right',
		label: 'Dropdown Click',
		onSelect: (...rest) => {
			action('Selected')(...rest);
		},
		modal: false,
		options
	}))
	.add('Custom Trigger', () => getDropdownCustomTrigger({
		assistiveText: 'Custom Dropdown Trigger',
		onSelect: (...rest) => {
			action('Selected')(...rest);
		},
		options
	}))
	.add('Custom Content', () => getDropdown({
		label: 'Custom Content Dropdown Click',
		forceOpen: true,
		onSelect: (...rest) => {
			action('Selected')(...rest);
		},
		options
	}))
	.add('Hover', () => getDropdown({
		assistiveText: 'Icon More large',
		buttonVariant: 'icon',
		iconName: 'settings',
		iconVariant: 'more',
		onSelect: action('Selected'),
		openOn: 'hover',
		options
	}))
	.add('Hover with Checkmark', () => getDropdown({
		assistiveText: 'More Options',
		buttonVariant: 'icon',
		checkmark: true,
		iconName: 'down',
		iconVariant: 'border-filled',
		onMouseEnter: action('Mouse enter'),
		onMouseLeave: action('Mouse leave'),
		onSelect: action('Selected'),
		openOn: 'hover',
		options,
		value: 'C0'
	}));