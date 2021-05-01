import React from 'react';
import { Accordion } from '../components';
import faqsData from '../fixtures/faqs.json';

export const FaqsContainer = () => {
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Question</Accordion.Title>
			{faqsData.map((item) => {
				return (
					<Accordion.Item key={item.id}>
						<Accordion.Header>{item.header}</Accordion.Header>
						<Accordion.Body>{item.body}</Accordion.Body>
					</Accordion.Item>
				);
			})}
		</Accordion>
	);
};
