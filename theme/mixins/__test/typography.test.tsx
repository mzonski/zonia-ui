describe('responsiveFontSizeMixin', () => {
  const minSize = '16px';
  const maxSize = '24px';
  const minViewport = '320px';
  const maxViewport = '1600px';

  const TestComponent = styled.p`
    ${responsiveFontSizeMixin(minSize, maxSize, minViewport, maxViewport)};
  `;

  it('applies the correct initial font-size', () => {
    // Arrange
    const { getByText } = render(<TestComponent>Test Text</TestComponent>);
    const element = getByText('Test Text');

    // Act & Assert
    // Verify initial font-size is within expected range
    expect(element).toHaveStyle(`font-size: ${minSize}`);
  });

  it('applies the correct max font-size at max viewport width', () => {
    // Arrange
    global.innerWidth = parseInt(maxViewport);
    const { getByText } = render(<TestComponent>Test Text</TestComponent>);
    const element = getByText('Test Text');

    // Act & Assert
    // Simulate window resize event
    global.dispatchEvent(new Event('resize'));
    expect(element).toHaveStyle(`font-size: ${maxSize}`);
  });

  it('applies a font-size within the range for a mid-size viewport', () => {
    // Arrange
    const midViewport = (parseInt(minViewport) + parseInt(maxViewport)) / 2 + 'px';
    global.innerWidth = parseInt(midViewport);
    const { getByText } = render(<TestComponent>Test Text</TestComponent>);
    const element = getByText('Test Text');

    // Act & Assert
    global.dispatchEvent(new Event('resize'));
    const midSize = `calc(${minSize} + (${parseFloat(maxSize) - parseFloat(minSize)}) * ((100vw - ${minViewport}) / (${parseFloat(maxViewport) - parseFloat(minViewport)})))`;
    expect(element).toHaveStyle(`font-size: ${midSize}`);
  });
});
