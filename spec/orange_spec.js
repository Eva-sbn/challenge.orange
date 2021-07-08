describe("Orange", () => {
	let orange;

	beforeEach(() => {
  		 orange = new Orange();
  	});

  it("has a diameter more than 2.5", () => {
    desiredDiameterRange = [2.5, 3.2]
    expect(orange.diameter >= desiredDiameterRange[0]).toBeTruthy();
	});
	
	it("has a diameter 3.2", () => {
		desiredDiameterRange = [2.5, 3.2]
		expect(orange.diameter <= desiredDiameterRange[1]).toBeTruthy();
	});

});
