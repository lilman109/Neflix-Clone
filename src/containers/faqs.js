import React from 'react';
import { Accordion } from '../components';
import { OptForm } from '../components';
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
			<OptForm>
				<OptForm.Input placeholder='Email Address' />
				<OptForm.Button>Try Now</OptForm.Button>
				<OptForm.Break />
				<OptForm.Text>
					Ready to watch? Enter your email to create or restart your membership.
				</OptForm.Text>
			</OptForm>
		</Accordion>
	);
};
