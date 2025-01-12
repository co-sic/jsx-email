import { render } from '@jsx-email/render';

import { Row } from '../src';

describe('<Row> component', async () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.resetModules();
  });

  it('renders children correctly', async () => {
    const testMessage = 'Test message';
    const html = await render(<Row>{testMessage}</Row>);
    expect(html).toContain(testMessage);
  });

  it('passes style and other props correctly', async () => {
    const style = { backgroundColor: 'red' };
    const html = await render(
      <Row style={style} data-testid="row-test">
        Test
      </Row>
    );
    expect(html).toContain('style="background-color:red"');
    expect(html).toContain('data-testid="row-test"');
  });

  it('renders correctly', async () => {
    const actualOutput = await render(<Row children={undefined} />);
    expect(actualOutput).toMatchSnapshot();
  });
});
