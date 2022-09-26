import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { ActiveSessionProvider } from '../ActiveSessionProvider';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

jest.useFakeTimers();

let preActionMock = jest.fn();
let postActionMock = jest.fn();

const timeout = 5 * 60 * 1000; // 5 minutes

describe('ActiveSessionProvider', () => {
	beforeEach(() => {
		preActionMock = jest.fn();
		postActionMock = jest.fn();
	});

	describe('ActiveSessionProvider is disabled', () => {
		it('should display children', () => {
			render(
				<ActiveSessionProvider
					timeout={timeout}
					preAction={preActionMock}
					postAction={postActionMock}
					isEnabled={false}
				>
					<div>Here my component</div>
				</ActiveSessionProvider>,
			);

			const children = screen.getAllByText('Here my component');

			expect(children.length).toEqual(1);
		});

		it("shouldn't call preAction method", () => {
			render(
				<ActiveSessionProvider
					timeout={timeout}
					preAction={preActionMock}
					postAction={postActionMock}
					isEnabled={false}
				>
					<div>Here my component</div>
				</ActiveSessionProvider>,
			);

			jest.advanceTimersByTime(timeout);

			expect(preActionMock).not.toBeCalled();
		});

		it("shouldn't call postAction method", () => {
			render(
				<ActiveSessionProvider timeout={timeout} postAction={postActionMock} isEnabled={false}>
					<div>Here my component</div>
				</ActiveSessionProvider>,
			);

			jest.advanceTimersByTime(timeout);

			expect(postActionMock).not.toBeCalled();
		});

		it("shouldn't call preAction and postAction method even if the user is active", () => {
			render(
				<ActiveSessionProvider
					timeout={timeout}
					preAction={preActionMock}
					postAction={postActionMock}
					isEnabled={false}
				>
					<div>Here my component</div>
				</ActiveSessionProvider>,
			);

			jest.advanceTimersByTime(timeout - 1000);

			expect(preActionMock).not.toBeCalled();
			expect(postActionMock).not.toBeCalled();

			userEvent.click(screen.getByText('Here my component'));

			userEvent.keyboard('F');

			jest.advanceTimersByTime(timeout);

			expect(preActionMock).not.toBeCalled();
			expect(postActionMock).not.toBeCalled();
		});
	});

	describe('ActiveSessionProvider is enabled', () => {
		it('should display children', () => {
			render(
				<ActiveSessionProvider timeout={timeout} preAction={preActionMock} postAction={postActionMock} isEnabled>
					<div>Here my component</div>
				</ActiveSessionProvider>,
			);

			const children = screen.getAllByText('Here my component');

			expect(children.length).toEqual(1);
		});
		it('should display children with isEnabled default value', () => {
			render(
				<ActiveSessionProvider timeout={timeout} preAction={preActionMock} postAction={postActionMock}>
					<div>Here my component</div>
				</ActiveSessionProvider>,
			);

			const children = screen.getAllByText('Here my component');

			expect(children.length).toEqual(1);
		});

		it('should call preAction method', () => {
			render(
				<ActiveSessionProvider timeout={timeout} preAction={preActionMock} postAction={postActionMock} isEnabled>
					<div>Here my component</div>
				</ActiveSessionProvider>,
			);

			expect(preActionMock).toBeCalled();
		});

		it('should call postAction method after 5 minutes', () => {
			act(() => {
				render(
					<ActiveSessionProvider timeout={timeout} preAction={preActionMock} postAction={postActionMock} isEnabled>
						<div>Here my component</div>
					</ActiveSessionProvider>,
				);

				expect(postActionMock).not.toBeCalled();

				jest.advanceTimersByTime(timeout + 1000);

				expect(postActionMock).toBeCalled();
			});
		});

		it('should call postAction method after 5 minutes if the user is active', () => {
			act(() => {
				render(
					<ActiveSessionProvider timeout={timeout} preAction={preActionMock} postAction={postActionMock} isEnabled>
						<div>Here my component</div>
					</ActiveSessionProvider>,
				);

				jest.advanceTimersByTime(timeout - 1000);

				expect(postActionMock).not.toBeCalled();

				userEvent.click(screen.getByText('Here my component'));

				userEvent.keyboard('F');

				jest.advanceTimersByTime(timeout - 1000);

				expect(postActionMock).not.toBeCalled();

				jest.advanceTimersByTime(2000);

				expect(postActionMock).toBeCalled();

				userEvent.click(screen.getByText('Here my component'));

				userEvent.keyboard('F');

				expect(postActionMock).toBeCalledTimes(1);
			});
		});
	});
});
