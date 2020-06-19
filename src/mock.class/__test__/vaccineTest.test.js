import VaccineTest from "../vaccineTest";
import Recipient from "../Recipient";
import Covid19Vaccine from "../covid19Vaccine";

const mockAcceptInjection = jest.fn();
let mockGetHasAntibodies = jest.fn().mockImplementation(() => true);

jest.mock("../recipient", () => {
  // mock class实现
  return jest.fn().mockImplementation(() => {
    return {
      acceptInjection: mockAcceptInjection,
      getHasAntibodies: mockGetHasAntibodies,
    };
  });
});

beforeEach(() => {
  // clear mock here
  Recipient.mockClear();
  mockAcceptInjection.mockClear();
  mockGetHasAntibodies.mockClear();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test here
    const vaccineTest = new VaccineTest();
    vaccineTest.inject();
    expect(mockAcceptInjection).toHaveBeenCalledWith(
      expect.any(Covid19Vaccine)
    );
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here

    const vaccineTest = new VaccineTest();
    const res = vaccineTest.test();
    expect(res).toEqual("Vaccine Test Success");

    // });
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
    mockGetHasAntibodies = jest.fn().mockImplementation(() => false);
    const vaccineTest = new VaccineTest();
    const res = vaccineTest.test();
    expect(res).toEqual("Vaccine Test Failed");
  });
});
